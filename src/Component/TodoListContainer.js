import {
  getListRD,
  removeTodoRD,
  activeTodo,
  editTodo,
  checkALL,
} from "../features/todoList/listSlice";
import { connect } from "react-redux";
import TodoList from "./TodoList";
import { getList, addTodoSG, removeTodoSG } from "../sagaContainer/type";

const mapStateToProps = (state, ownProps) => {
  const todoListRD = state.list.list;
  return {
    todoListRD,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getList: () => dispatch(getList()),
  addTodoSG: (todo) => dispatch(addTodoSG(todo)),
  removeTodoSG: ({ index, id }) => dispatch(removeTodoSG({ index, id })),
  activeTodo: (index) => dispatch(activeTodo(index)),
  editTodo: ({ name, id, index }) => dispatch(editTodo({ name, id, index })),
  checkALL: (check) => dispatch(checkALL(check)),
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
