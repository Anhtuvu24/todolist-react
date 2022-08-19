import React from 'react';
//import ReactDOM from 'react-dom';
import Todo from './Todo';
import Header from './Header';
import { nanoid } from 'nanoid';
import Footer from './Footer';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                // {
                //     name: 'todo1',
                //     id: 0,
                //     isCompleted: false,
                // },

                // {
                //     name: 'todo2',
                //     id: 1,
                //     isCompleted: false,
                // },

                // {
                //     name: 'todo3',
                //     id: 2,
                //     isCompleted: false,
                // }
            ],
            statusList: "All",
        };
    }

    addTodo = (name) => {
        this.setState({list: [...this.state.list, {name: name, isCompleted: false, id: nanoid()}]});
    };

    removeTodo = (index) => {
        const { list }=this.state;
        list.splice(index, 1);
        this.setState({list: list});
    };


    handleCheckBox = (check) => {
        const { list } = this.state;
        list.map((todo, index) => {
            if(todo.id === check) {
                todo.isCompleted = !todo.isCompleted;
            }
        })
        this.setState({list: list});
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
        this.setState({list: list});    
    };

    displayList = (status) => {
        this.setState({statusList: status});
    };
  
    render() {
    const { list } = this.state;
        if(this.state.statusList === "All") {
            return(
                <div className = "list-container">
                    <Header addTodo={this.addTodo}/>
                    <ul>
                        <div>
                            {list.map((todo, index) =>
                                <Todo 
                                name={todo.name} 
                                isCompleted={todo.isCompleted}
                                index={index}
                                removeTodo={this.removeTodo} 
                                handleCheckBox={this.handleCheckBox}
                                id={todo.id}
                                />
                            )}
                        </div>
                    </ul>
    
                    <b><i>{this.state.list.length}</i> items</b>
                    <button onClick={this.checkedALL}>{this.isCheckAll() ? 'unCompleteALL' :  'completedAll'}</button>
                    
                    <Footer displayList={this.displayList}/>
                </div>
            );
        }
        else if(this.state.statusList === "Active") {
            return(
                <div className = "list-container">
                    <Header addTodo={this.addTodo}/>
                    <ul>
                        <div>
                            {list.map((todo, index) => {
                                if(todo.isCompleted === false) {
                                    return(
                                    <Todo 
                                        name={todo.name} 
                                        isCompleted={todo.isCompleted}
                                        index={index}
                                        removeTodo={this.removeTodo} 
                                        handleCheckBox={this.handleCheckBox}
                                        id={todo.id}
                                    />)
                                }}    
                                
                            )}
                        </div>
                    </ul>
    
                    <b><i>{this.state.list.length}</i> items</b>
                    
                    <Footer displayList={this.displayList}/>
                </div>
            );
        }
        else if (this.state.statusList === "Complete") {
            return(
                <div className = "list-container">
                    <Header addTodo={this.addTodo}/>
                    <ul>
                        <div>
                            {list.map((todo, index) => {
                                if(todo.isCompleted === true) {
                                    return(
                                    <Todo 
                                        name={todo.name} 
                                        isCompleted={todo.isCompleted}
                                        index={index}
                                        removeTodo={this.removeTodo} 
                                        handleCheckBox={this.handleCheckBox}
                                        id={todo.id}
                                    />)
                                }}    
                                
                            )}
                        </div>
                    </ul>
    
                    <b><i>{this.state.list.length}</i> items</b>
                    
                    <Footer displayList={this.displayList}/>
                </div>
            );
        }
    }
}

export default TodoList


