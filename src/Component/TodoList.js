import React from 'react';
//import ReactDOM from 'react-dom';
import Todo from './Todo';
import Header from './Header';
import { nanoid } from 'nanoid';
import Footer from './Footer';
import Page from './Page'
import {themes, Theme} from './theme';
import ThemeButton from './ThemeButton';
import '../CSS/TodoList.css'


class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTheme = () => {
            this.setState(state => ({
              theme:
                state.theme === themes.dark
                  ? themes.light
                  : themes.dark,
            }));
            console.log(this.state.theme)
        };
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
            limitTodo: 3,theme: themes.light,
            toggleTheme: this.toggleTheme,
        };
        this.scrollRef = React.createRef();
    }

    addTodo = (name) => {
        // this.setState({list: [...this.state.list, {name: name, isCompleted: false, id: nanoid()}]});
        this.setState((state) => ({
            list: [...state.list, {name: name, isCompleted: false, id: nanoid()}]
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
            if(todo.id === check) {
                todo.isCompleted = !todo.isCompleted;
            }
        })
        this.setState({list});
    };

    isCheckAll = () => {
        const { list } = this.state;
        return !(list.some((todo) => !todo.isCompleted))
    };

    checkedALL = () => {
        const { list } = this.state;
        if(this.isCheckAll()) {
            list.map((todo) => {
                todo.isCompleted = false;
            })
        }
        else {
            list.map((todo) => {
                todo.isCompleted = true;
            })
        }
        this.setState({list});    
    };

    displayList = (status) => {
        this.setState({statusList: status});
    };

    setUpdate = (updateName, id) => {
        const {list} = this.state;
        list.map((todo) => {
            if(todo.id === id) {
                todo.name = updateName;
                
            }
        }) 
        this.setState({list});
    };

    setKeySearch = (keySearch) => {
        this.setState({keySearch});
    };

    getPage = (numberPage) => {
        this.setState({numberPage});
    }

    scrollBottomDom = (dom) => {
        let _scrollEHeight;
        let _clientHeight;
        let _maxScrollTop;
        let _topInvisible;
        _scrollEHeight = dom.scrollHeight;
        _clientHeight = dom.clientHeight;
        // dung clientHeight
        _maxScrollTop = _scrollEHeight - _clientHeight;
        _topInvisible = dom.scrollTop;
        return _maxScrollTop - _topInvisible;
        
    };

    setScrollRef = (e) => {
        this.scrollRef = (e);
    }

    onScroll = () => {
        const bot = this.scrollBottomDom(this.scrollRef)
        console.log(bot);
        if(bot < 5) {
            debugger;
            this.setState(state => ({
                limitTodo: state.limitTodo + 1
            }))
        }
    }

    handleSetTheme = (theme) => {
        this.setState({theme});
    }

    render() {
        const { list, statusList, keySearch, numberPage, limitTodo, theme, toggleTheme } = this.state;
        console.log(this.scrollRef);
        return(
            <>
                <div style={{backgroundColor: theme.backgroundColor, color: theme.color}} className = "list-container">
                    <Header addTodo={this.addTodo} setKeySearch = {this.setKeySearch} displayList = {this.displayList}/>
                    <div onScroll={this.onScroll} ref={this.setScrollRef} style={{marginTop: 20,  overflowY: "scroll", height: 200 }}>
                        {list.map((todo, index) => {
                            let flag = false;
                            if(
                                (
                                    (todo.isCompleted && statusList === 'Complete') || 
                                    (!todo.isCompleted && statusList === 'Active') || 
                                    statusList === 'All'
                                ) && 
                                (keySearch ? todo.name.includes(keySearch) : true) &&
                                (index < limitTodo)) 
                            {
                                flag = true;
                                return flag && (
                                    <Todo 
                                        name={todo.name} 
                                        isCompleted={todo.isCompleted}
                                        index={index}
                                        removeTodo={this.removeTodo} 
                                        handleCheckBox={this.handleCheckBox}
                                        id={todo.id}
                                        setUpdate = {this.setUpdate}
                                        key={todo.id}
                                    />
                                ) 
                            }
                            return null;
                        })}
                    </div>
                    <Page getPage = {this.getPage} longList = {Math.ceil(list.length / 3)}/>       
                    <div className='Container-footer'>
                        <b><i>{list.length}</i> items</b>
                        <button onClick={this.checkedALL}>{this.isCheckAll() ? 'unCompleteALL' :  'completedAll'}</button>
                        <Footer displayList={this.displayList}/>
                    </div>
                </div>
            </>
        ); 
    }
}

export default TodoList