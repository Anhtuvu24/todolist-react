import React from 'react';
import '../CSS/Todo.css';

//import ReactDOM from 'react-dom';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
        }
    }
    
    handleRemoveTodo = () => {
        this.props.removeTodo(this.props.index);
        
    };

    handleEditing = () => {
        this.setState({editing: true})
    };

    handleUpdate = e => {
        if(e.key === "Enter") {
            this.setState({editing: false});
        }
    };

    render() {
        let viewMode = {};
        let editMode = {};
        const {isCompleted, id, index, name, } = this.props;
        if(this.state.editing) {
            viewMode.display = "none";
        }
        else {
            editMode.display = "none";
        }
        return(
            <div style={{height: 50}} className='todo-container'>
                <input type = "checkbox" onChange={() => this.props.handleCheckBox(id)} checked = {isCompleted}/>
                <li className = {isCompleted ? "completed" : ''}>
                    <div className='todoDisplay' style = {viewMode} onDoubleClick={this.handleEditing}>
                        {index}. {name}
                    </div>
                    <input onChange={e => {this.props.setUpdate(e.target.value, id)}} onKeyDown = {this.handleUpdate} style={editMode} type = "text"/>
                </li>
                <button onClick={this.handleRemoveTodo}>delelte</button>
            </div>
        )
    }
}

export default Todo;