import Reac, { useContext } from "react";
import { Checkbox, Popconfirm, Button } from "antd";
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
      <Checkbox
        onChange={() => handleCheckBoxPut(id, index)}
        checked={isCompleted}
      ></Checkbox>
      <div className={isCompleted ? "completed" : ""}>
        <div className="todoDisplay">
          {index}. {name}
        </div>
      </div>
      <Popconfirm placement="topLeft" title="Xác nhận xóa" onConfirm={handleRemoveTodo} okText="Yes" cancelText="No">
        <button>delelte</button>
      </Popconfirm>

      <button onClick={() => editMode(name, id, index)}>Edit</button>
    </div>
  );
}

export default Todo;