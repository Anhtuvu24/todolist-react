import React, { useState, useRef, useContext, useEffect } from 'react';
//import ReactDOM from 'react-dom';
import Header from './Header';
import { nanoid } from 'nanoid';
import Footer from './Footer';
import { Theme } from './theme';
import ThemeButton from './ThemeButton';
import TodoListItemHOC from './TodoListItem'
import { instance } from './axiosURL'
import { useSelector, useDispatch } from 'react-redux';
import { addTodoRD, getListRD, removeTodoRD, activeTodo } from '../actions/todo';
import '../CSS/TodoList.css';


function TodoList() {
    const [list, setList] = useState([]);
    const [statusList, setStatusList] = useState('All');
    const [keySearch, _setKeySearch] = useState('');
    const headerRef = useRef(null);
    const theme = useContext(Theme);
    const todoListRD = useSelector(state => state.todo.list);
    const dispatch = useDispatch();

    ///Post request
    const postRequest = async (name) => {
        const id = nanoid();
        const newTodo = {
            id,
            name: name,
            isCompleted: false
        };
        addTodoRD(name, id);

        await instance.post("todo", newTodo)
            .catch((err) => {
                console.log(err);
            })
        const action = addTodoRD(newTodo);
        dispatch(action);
    };

    //Get request
    useEffect(() => {
        async function fecthApi() {
            let res = await instance.get('todo')
            const action = getListRD(res.data);
            dispatch(action);
        }
        fecthApi();
    }, []);

    // const addTodo = (name, id) => {
    //     // this.setState({list: [...this.state.list, {name: name, isCompleted: false, id: nanoid()}]});
    //     setList([...list, { name: name, isCompleted: false, id }]);
    // };

    const removeTodoDelete = async (index, id) => {
        const action = removeTodoRD(index);
        dispatch(action);
        await instance.delete(`todo/${id}`);
    };

    // const removeTodo = (index) => {
    //     let new_List = list;
    //     new_List.splice(index, 1);
    //     setList([...new_List]);
    // };

    const handleCheckBoxPut = async (id, index) => {
        const new_List = [...todoListRD];
        let statusTodo;
        statusTodo = !new_List[index].isCompleted;
        const action = activeTodo(index);
        dispatch(action);
        await instance.put(`todo/${id}`, { isCompleted: statusTodo });
    };

    const isCheckAll = () => {
        return !(todoListRD.some((todo) => !todo.isCompleted));
    };

    const checkAllPut = async () => {
        const flag = !isCheckAll();
        for (const item of todoListRD) {
            if (item.isCompleted !== flag) {
                await instance.put(`todo/${item.id}`, { isCompleted: flag });
            }
        };
        const _list = todoListRD.map(todo => {
            todo.isCompleted = flag;
            return todo;
        });
        setList(_list);
    };

    const displayList = (statusList) => {
        setStatusList(statusList);
    };

    const editMode = (name, id) => {
        headerRef.current.onFocusInput(name, id);
    };

    const ediTodoPut = async (name, id) => {
        console.log(list);
        await instance.put(`todo/${id}`, { name })
        const new_List = list.map(todo => {//
            if (todo.id === id) {
                todo.name = name;
            }
            return todo;
        })
        setList(new_List);
    };

    const setKeySearch = (keySearch) => {
        _setKeySearch(keySearch);
    };

    return (
        <>
            {/* fix------------------------------------- */}
            <div style={{ backgroundColor: theme.theme.backgroundColor, color: theme.theme.color }} className="list-container">
                <Header
                    setKeySearch={setKeySearch}
                    displayList={displayList}
                    refFocus={headerRef}
                    ediTodoPut={ediTodoPut}
                    postRequest={postRequest}
                />
                <TodoListItemHOC
                    statusList={statusList}
                    keySearch={keySearch}
                    removeTodoDelete={removeTodoDelete}
                    handleCheckBoxPut={handleCheckBoxPut}
                    editMode={editMode}
                />
                <div className='Container-footer'>
                    <b><i>{todoListRD.length}</i> items</b>
                    <button onClick={checkAllPut}>{isCheckAll() ? 'UnCompleteALL' : 'completedAll'}</button>
                    <Footer displayList={displayList} statusList={statusList} />
                </div>
            </div>
            <ThemeButton />
        </>
    );

};



export default TodoList