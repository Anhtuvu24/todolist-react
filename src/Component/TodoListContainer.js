import {
  addTodoRD,
  getListRD,
  removeTodoRD,
  activeTodo,
  editTodo,
  checkALL,
} from "../features/todoList/listSlice";
import { connect } from "react-redux";
import TodoList from "./TodoList";

const mapStateToProps = (state, ownProps) => {
  const todoListRD = state.list.list;
  return {
    todoListRD,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addTodoRD: (todo) => dispatch(addTodoRD(todo)),
  removeTodoRD: (index) => dispatch(removeTodoRD(index)),
  getListRD: (list) => dispatch(getListRD(list)),
  activeTodo: (index) => dispatch(activeTodo(index)),
  editTodo: ({ name, id, index }) => dispatch(editTodo({ name, id, index })),
  checkALL: (check) => dispatch(checkALL(check)),
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
