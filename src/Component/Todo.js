import React, { useContext } from "react";
import { Theme } from "./theme";

import "../CSS/Todo.css";

function Todo(props) {
  const {
    isCompleted,
    id,
    indexPin,
    index,
    name,
    handleCheckBoxPut,
    editMode,
    removeTodoDelete,
  } = props;
  const theme = useContext(Theme);

  const handleRemoveTodo = () => {
    removeTodoDelete(index, id);
  };
  console.log("TD: ", indexPin);
  return (
    <div
      className="todo-container"
      style={{
        backgroundColor: theme.theme.backgroundColor,
        color: theme.theme.color,
      }}
    >
      <input
        type="checkbox"
        onChange={() => handleCheckBoxPut(id, index)}
        checked={isCompleted}
      />
      <div className={isCompleted ? "completed" : ""}>
        <div className="todoDisplay">
          {indexPin}. {name}
        </div>
      </div>
      <button onClick={handleRemoveTodo}>delelte</button>
      <button onClick={() => editMode(name, id, index)}>Edit</button>
    </div>
  );
}

export default Todo;
