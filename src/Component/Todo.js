import React from 'react';
import '../CSS/Todo.css';

//import ReactDOM from 'react-dom';

class Todo extends React.Component {
    
    handleRemoveTodo = () => {
        this.props.removeTodo(this.props.index);
        
    };

    render() {
        const {isCompleted, id, index, name, handleCheckBox, editMode} = this.props;
        return(
            <div style={{height: 50, display: 'flex', justifyContent: 'center'}} className='todo-container'>
                <input type = "checkbox" onChange={() => handleCheckBox(id)} checked = {isCompleted}/>
                <div className = {isCompleted ? "completed" : ''}>
                    <div style={{textAlign: 'left', marginLeft: 50}} className='todoDisplay' onDoubleClick={this.handleEditing}>
                        {index}. {name}
                    </div>
                </div>
                <button style={{marginLeft: 100}} onClick={this.handleRemoveTodo}>delelte</button>
                <button onClick={() => editMode(name, id)}>Edit</button>
            </div>
        )
    }
}

export default Todo;