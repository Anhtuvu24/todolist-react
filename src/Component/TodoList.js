import React, { useState, useRef, useContext } from 'react';
//import ReactDOM from 'react-dom';
import Header from './Header';
import { nanoid } from 'nanoid';
import Footer from './Footer';
import { Theme } from './theme';
import ThemeButton from './ThemeButton';
import TodoListItemHOC from './TodoListItem'
import '../CSS/TodoList.css'


function TodoList() {
    const [list, setList] = useState([
        {
            name: 'todo1',
            id: 10,
            isCompleted: false,
        },

        {
            name: 'todo2',
            id: 1,
            isCompleted: false,
        },

        {
            name: 'todo3',
            id: 2,
            isCompleted: false,
        },
        {
            name: 'todo1',
            id: 3,
            isCompleted: false,
        },

        {
            name: 'todo2',
            id: 4,
            isCompleted: false,
        },

        {
            name: 'todo3',
            id: 5,
            isCompleted: false,
        },
        {
            name: 'todo1',
            id: 6,
            isCompleted: false,
        },

        {
            name: 'todo2',
            id: 7,
            isCompleted: false,
        },

        {
            name: 'todo3',
            id: 8,
            isCompleted: false,
        }
    ]);
    const [statusList, setStatusList] = useState('All');
    const [keySearch, _setKeySearch] = useState('');
    const headerRef = useRef(null);
    const theme = useContext(Theme);

    const addTodo = (name) => {
        // this.setState({list: [...this.state.list, {name: name, isCompleted: false, id: nanoid()}]});
        setList([...list, { name: name, isCompleted: false, id: nanoid() }]);
    };

    const removeTodo = (index) => {
        let new_List = list;
        new_List.splice(index, 1);
        setList([...new_List]);
    };


    const handleCheckBox = (check) => {
        const _list = list.map((todo) => {
            if (todo.id === check) {
                todo.isCompleted = !todo.isCompleted;
            }
            return todo;
        })
        setList(_list);
    };

    const isCheckAll = () => {
        return !(list.some((todo) => !todo.isCompleted))
    };

    const checkedALL = () => {
        const flag = !isCheckAll();
        const _list = list.map(function (todo) {
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

    const editTodo = (name, id) => {
        const _list = list.map(todo => {
            if (todo.id === id) {
                todo.name = name;
            }
            return todo;
        })
        setList(_list);
    };

    const setKeySearch = (keySearch) => {
        _setKeySearch(keySearch);
    };

    return (
        <>
            {/* fix------------------------------------- */}
            <div style={{ backgroundColor: theme.theme.backgroundColor, color: theme.theme.color }} className="list-container">
                <Header
                    addTodo={addTodo}
                    setKeySearch={setKeySearch}
                    displayList={displayList}
                    refFocus={headerRef}
                    editTodo={editTodo}
                />

                <TodoListItemHOC
                    list={list}
                    statusList={statusList}
                    keySearch={keySearch}
                    removeTodo={removeTodo}
                    handleCheckBox={handleCheckBox}
                    editMode={editMode}
                />
                <div className='Container-footer'>
                    <b><i>{list.length}</i> items</b>
                    <button onClick={checkedALL}>{isCheckAll() ? 'unCompleteALL' : 'completedAll'}</button>
                    <Footer displayList={displayList} />
                </div>
            </div>
            <ThemeButton />
        </>
    );
};

export default TodoList