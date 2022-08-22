import React from 'react';
//import ReactDOM from 'react-dom';
import Todo from './Todo';
import Header from './Header';
import { nanoid } from 'nanoid';
import Footer from './Footer';
import '../CSS/TodoList.css'


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
            keySearch: '',
        };
    }

    addTodo = (name) => {
        this.setState({list: [...this.state.list, {name: name, isCompleted: false, id: nanoid()}]});
    };

    removeTodo = (index) => {
        const { list }=this.state;
        list.splice(index, 1);
        this.setState({list});
    };


    handleCheckBox = (check) => {
        const { list } = this.state;
        list.map((todo, index) => {
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
        list.map((todo, index) => {
            if(todo.id === id) {
                todo.name = updateName;
                
            }
        }) 
        this.setState({list});
    };

    setKeySearch = (keySearch) => {
        this.setState({keySearch});
    };

    render() {
    const { list } = this.state;
        if(this.state.statusList === "All") {
            return(
                <div className = "list-container">
                    <Header addTodo={this.addTodo} setKeySearch = {this.setKeySearch} displayList = {this.displayList}/>
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
                                setUpdate = {this.setUpdate}
                                key={todo.id}
                                />
                            )}
                        </div>
                    </ul>
    
                    <div className='Container-footer'>
                        <b><i>{this.state.list.length}</i> items</b>
                        <button onClick={this.checkedALL}>{this.isCheckAll() ? 'unCompleteALL' :  'completedAll'}</button>
                                
                        <Footer displayList={this.displayList}/>
                    </div>
                </div>
            );
        }
        else if(this.state.statusList === "Active") {
            return(
                <div className = "list-container">
                    <Header addTodo={this.addTodo} setKeySearch = {this.setKeySearch} displayList = {this.displayList}/>
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
                                        setUpdate = {this.setUpdate}
                                        key={todo.id}
                                    />)
                                }}    
                                
                            )}
                        </div>
                    </ul>
    
                    <div className='Container-footer'>
                        <b><i>{this.state.list.length}</i> items</b>                                
                        <Footer displayList={this.displayList}/>
                    </div>
                </div>
            );
        }
        else if (this.state.statusList === "Complete") {
            return(
                <div className = "list-container">
                    <Header addTodo={this.addTodo} setKeySearch = {this.setKeySearch} displayList = {this.displayList}/>
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
                                        setUpdate = {this.setUpdate}
                                        key={todo.id}
                                    />)
                                }}    
                                
                            )}
                        </div>
                    </ul>
    
                    <div className='Container-footer'>
                        <b><i>{this.state.list.length}</i> items</b>                                
                        <Footer displayList={this.displayList}/>
                    </div>
                </div>
            );
        }
        else if(this.state.statusList === 'searchList') {
            return(
                <div className = "list-container">
                    <Header addTodo={this.addTodo} setKeySearch = {this.setKeySearch} displayList = {this.displayList}/>
                    <ul>
                        <div>
                            {list.map((todo, index) => {
                                if(todo.name.search(this.state.keySearch) >= 0) {
                                    return(
                                    <Todo 
                                        name={todo.name} 
                                        isCompleted={todo.isCompleted}
                                        index={index}
                                        removeTodo={this.removeTodo} 
                                        handleCheckBox={this.handleCheckBox}
                                        id={todo.id}
                                        setUpdate = {this.setUpdate}
                                        key={todo.id}
                                    />)
                                }}    
                                
                            )}
                        </div>
                    </ul>
    
                    <div className='Container-footer'>
                        <b><i>{this.state.list.length}</i> items</b>                                
                        <Footer displayList={this.displayList}/>
                    </div>
                </div>
            );
        }
    }
}

export default TodoList


