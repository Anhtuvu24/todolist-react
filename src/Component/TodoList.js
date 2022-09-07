import React from 'react';
//import ReactDOM from 'react-dom';
import Header from './Header';
import { nanoid } from 'nanoid';
import Footer from './Footer';
import { Theme } from './theme';
import ThemeButton from './ThemeButton';
import TodoListItemHOC from './TodoListItem'
import '../CSS/TodoList.css'


class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
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
            ],
            statusList: "All",
            keySearch: '',
            numberPage: 1,
            isLoading: false,
        };
        this.headerRef = React.createRef();
    }

    addTodo = (name) => {
        // this.setState({list: [...this.state.list, {name: name, isCompleted: false, id: nanoid()}]});
        this.setState((state) => ({
            list: [...state.list, { name: name, isCompleted: false, id: nanoid() }]
        }))
    };

    removeTodo = (index) => {
        // const { list }=this.state;
        // list.splice(index, 1);
        // this.setState({list});
        this.setState((state) => {
            state.list.splice(index, 1);
            return {
                list: state.list
            }
        });
    };


    handleCheckBox = (check) => {
        const { list } = this.state;
        list.map((todo) => {
            if (todo.id === check) {
                todo.isCompleted = !todo.isCompleted;
            }
        })
        this.setState({ list });
    };

    isCheckAll = () => {
        const { list } = this.state;
        return !(list.some((todo) => !todo.isCompleted))
    };

    checkedALL = () => {
        const { list } = this.state;
        const flag = !this.isCheckAll();
        list.map((todo) => {
            todo.isCompleted = flag;
        })
        this.setState({ list });
    };

    displayList = (statusList) => {
        this.setState({ statusList });
    };

    editMode = (name, id) => {
        this.headerRef.current.onFocusInput(name, id);
        //console.log(this.headerRef.current);
    }

    editTodo = (name, id) => {
        const { list } = this.state;
        list.map(todo => {
            if (todo.id === id) {
                todo.name = name;
            }
        })
        this.setState({ list });
    }

    setKeySearch = (keySearch) => {
        this.setState({ keySearch });
    };

    getPage = (numberPage) => {
        this.setState({ numberPage });
    }

    handleSetTheme = (theme) => {
        this.setState({ theme });
    }

    render() {
        const { list, statusList, keySearch } = this.state;
        return (
            <>
                <Theme.Consumer>
                    {({ theme, toggleTheme }) => (
                        <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }} className="list-container">
                            <Header
                                addTodo={this.addTodo}
                                setKeySearch={this.setKeySearch}
                                displayList={this.displayList}
                                ref={this.headerRef}
                                editTodo={this.editTodo}
                            />

                            <TodoListItemHOC
                                list={list}
                                statusList={statusList}
                                keySearch={keySearch}
                                removeTodo={this.removeTodo}
                                handleCheckBox={this.handleCheckBox}
                                setUpdate={this.setUpdate}
                                editMode={this.editMode}
                            />
                            {/* <Page getPage = {this.getPage} longList = {Math.ceil(list.length / 3)}/>        */}
                            <div className='Container-footer'>
                                <b><i>{list.length}</i> items</b>
                                <button onClick={this.checkedALL}>{this.isCheckAll() ? 'unCompleteALL' : 'completedAll'}</button>
                                <Footer displayList={this.displayList} />
                            </div>
                        </div>
                    )}
                </Theme.Consumer>
                <ThemeButton />
            </>
        );
    }
}

export default TodoList