import React from 'react';
import '../CSS/Todo.css';

//import ReactDOM from 'react-dom';

function Todo(props) {

    const handleRemoveTodo = () => {
        props.removeTodo(props.index);
    };
    const { isCompleted, id, index, name, handleCheckBox, editMode } = props;
    return (
        <div className='todo-container'>
            <input type="checkbox" onChange={() => handleCheckBox(id)} checked={isCompleted} />
            <div className={isCompleted ? "completed" : ''}>
                <div
                    className='todoDisplay'>
                    {index}. {name}
                </div>
            </div>
            <button
                onClick={handleRemoveTodo}>delelte</button>
            <button onClick={() => editMode(name, id)}>Edit</button>
        </div>
    )
}

export default Todo;