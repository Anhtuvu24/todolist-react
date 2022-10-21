import { connect } from "react-redux";
import { createSelector } from "reselect";
import TodoList from "./TodoList";
import {
  getList,
  addTodoSG,
  removeTodoSG,
  activeTodoSG,
  checkAllSG,
  editTodoSG,
} from "../sagaContainer/type";

const mapStateToProps = (state, ownProps) => {
  const todoListRD = state.list.list;
  return {
    todoListRD,
    getListActive: getListActive(todoListRD),
    getListComplete: getListComplete(todoListRD),
  };
};

const getListSelector = (state) => state;
const getListActive = createSelector(getListSelector, (state) => {
  const activeList = state.filter((todo) => {
    return todo.isCompleted === true;
  });
  return activeList;
});

const getListComplete = createSelector(getListSelector, (state) => {
  const activeList = state.filter((todo) => {
    return todo.isCompleted === false;
  });
  return activeList;
});

const mapDispatchToProps = (dispatch) => ({
  getList: () => dispatch(getList()),
  addTodoSG: (todo) => dispatch(addTodoSG(todo)),
  removeTodoSG: ({ index, id }) => dispatch(removeTodoSG({ index, id })),
  activeTodoSG: ({ id, index, statusTodo }) =>
    dispatch(activeTodoSG({ id, index, statusTodo })),
  editTodoSG: ({ name, id, index }) =>
    dispatch(editTodoSG({ name, id, index })),
  checkAllSG: ({ flag, todoListRD }) =>
    dispatch(checkAllSG({ flag, todoListRD })),
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
