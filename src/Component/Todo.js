import Reac, { useContext } from "react";
import { Theme } from "./theme";

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
  const theme = useContext(Theme);

  const handleRemoveTodo = () => {
    removeTodoDelete(index, id);
  };

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
          {index}. {name}
        </div>
      </div>
      <button onClick={handleRemoveTodo}>delelte</button>
      <button onClick={() => editMode(name, id, index)}>Edit</button>
    </div>
  );
}

export default Todo;
