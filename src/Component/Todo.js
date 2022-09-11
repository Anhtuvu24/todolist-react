import React from 'react';
import '../CSS/Todo.css';

//import ReactDOM from 'react-dom';

function Todo(props) {

    const handleRemoveTodo = () => {
        props.removeTodo(props.index);
    };
        const { isCompleted, id, index, name, handleCheckBox, editMode } = props;
        return (
            //fix-------------------------------
            <div style={{ height: 50, display: 'flex', justifyContent: 'center' }} className='todo-container'>
                <input type="checkbox" onChange={() => handleCheckBox(id)} checked={isCompleted} />
                <div className={isCompleted ? "completed" : ''}>
                    <div
                        //fix---------------------------------
                        style={{ textAlign: 'left', marginLeft: 50 }}
                        className='todoDisplay'>
                        {index}. {name}
                    </div>
                </div>
                <button
                //-fixxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    style={{ marginLeft: 100 }}
                    onClick={handleRemoveTodo}>delelte</button>
                <button onClick={() => editMode(name, id)}>Edit</button>
            </div>
        )
}

export default Todo;