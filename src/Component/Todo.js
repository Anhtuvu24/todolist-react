import React from "react";
import "../CSS/Todo.css";

function Todo(props) {
  const {
    isCompleted,
    id,
    index,
    name,
    handleCheckBoxPut,
    editMode,
    removeTodoDelete,
  } = props;
  const handleRemoveTodo = () => {
    removeTodoDelete(index, id);
  };
  return (
    <div className="todo-container">
      <input
        type="checkbox"
        onChange={() => handleCheckBoxPut(id, index)}
        checked={isCompleted}
      />
      <div className={isCompleted ? "completed" : ""}>
        <div className="todoDisplay">
          {index}. {name}
        </div>
      </div>
      <button onClick={handleRemoveTodo}>delelte</button>
      <button onClick={() => editMode(name, id)}>Edit</button>
    </div>
  );
}

export default Todo;
