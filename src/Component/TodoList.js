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
            id: 0,
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
    const [numberPage, setNumberPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const headerRef = React.createRef();

    const addTodo = (name) => {
        // this.setState({list: [...this.state.list, {name: name, isCompleted: false, id: nanoid()}]});
        setList([...list, { name: name, isCompleted: false, id: nanoid() }]);
    };

    const removeTodo = (index) => {
        // const { list }=this.state;
        // list.splice(index, 1);
        // this.setState({list});
        setList(list.splice(index, 1));
    };


    const handleCheckBox = (check) => {
        const _list = list.map((todo) => {
            if (todo.id === check) {
                todo.isCompleted = !todo.isCompleted;
            }
        })
        setList(_list);
    };

    const isCheckAll = () => {
        return !(list.some((todo) => !todo.isCompleted))
    };

    const checkedALL = () => {
        const flag = !this.isCheckAll();
        const _list = list.map((todo) => {
            todo.isCompleted = flag;
        })
        setList(_list);
    };

    const displayList = (statusList) => {
        setStatusList(statusList);
    };

    const editMode = (name, id) => {
        this.headerRef.current.onFocusInput(name, id);
        //console.log(this.headerRef.current);
    };

    const editTodo = (name, id) => {
        const _list = list.map(todo => {
            if (todo.id === id) {
                todo.name = name;
            }
        })
        setList(_list);
    };

    const setKeySearch = (keySearch) => {
        _setKeySearch(keySearch);
    };

    return (
        <>
            <Theme.Consumer>
                {({ theme, toggleTheme }) => (
                    //fix-------------------------------------
                    <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }} className="list-container">
                        <Header
                            addTodo={addTodo}
                            setKeySearch={setKeySearch}
                            displayList={displayList}
                            ref={headerRef}
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
                        {/* <Page getPage = {getPage} longList = {Math.ceil(list.length / 3)}/>        */}
                        <div className='Container-footer'>
                            <b><i>{list.length}</i> items</b>
                            <button onClick={checkedALL}>{isCheckAll() ? 'unCompleteALL' : 'completedAll'}</button>
                            <Footer displayList={displayList} />
                        </div>
                    </div>
                )}
            </Theme.Consumer>
            <ThemeButton />
        </>
    );
}

export default TodoList