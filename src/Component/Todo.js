import React from 'react';
import '../CSS/Todo.css';

function Todo(props) {
    const { isCompleted, id, index, name, handleCheckBox, editMode, removeTodo } = props;

    const handleRemoveTodo = () => {
        removeTodo(props.index);
    };
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
};

export default Todo;