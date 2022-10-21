import {
  call,
  put,
  take,
  takeEvery,
  fork,
  select,
  delay,
  takeLatest,
  apply,
  actionChannel,
} from "redux-saga/effects";
import { instance } from "../../Component/axiosURL";
import {
  addTodoRD,
  removeTodoRD,
  getListRD,
  activeTodo,
  editTodo,
  checkALL,
} from "../todoList/listSlice";

//saga getlist
function* sgGetList() {
  const res = yield instance.get(`todo`);
  yield put(getListRD(res.data));
}

function* sgWatchGetList() {
  yield takeEvery("GET_LIST", sgGetList);
}

//saga add todo

function* sgAddTodo(payload) {
  yield instance.post("todo", payload.payload);
  yield put(addTodoRD(payload));
}

function* sgWatchAddTodo() {
  //   const action = yield take("ADD_TODO_SG");
  //   yield fork(sgAddTodo, action.payload);
  yield takeEvery("ADD_TODO_SG", sgAddTodo);
}

//saga remove Todo

function* sgRemoveTodo(payload) {
  const { id, index } = payload.payload;
  yield put(removeTodoRD(index));
  yield instance.delete(`todo/${id}`);
}
function* sgWatchRemoveTodo() {
  yield takeEvery("REMOVE_TODO_SG", sgRemoveTodo);
}

//activeTodo

function* sgActiveTodo(payload) {
  const { id, index, statusTodo } = payload.payload;
  yield put(activeTodo({ index, statusTodo }));
  yield instance.put(`todo/${id}`, { isCompleted: statusTodo });
}
function* sgWatchActiveTodo() {
  yield takeEvery("ACTIVE_TODO_SG", sgActiveTodo);
}

//checkAll

function* sgCheckAll(payload) {
  const { flag, todoListRD } = payload.payload;
  yield put(checkALL(flag));
  for (const item of todoListRD) {
    if (item.isCompleted !== flag) {
      yield instance.put(`todo/${item.id}`, {
        isCompleted: flag,
      });
    }
  }
}

function* sgWatchCheckAll() {
  yield takeEvery("CHECK_ALL_SG", sgCheckAll);
}

//editTodo
function* sgEditTodo(payload) {
  const { id, index, name } = payload.payload;
  yield put(editTodo({ index, name }));
  yield instance.put(`todo/${id}`, { name });
}

function* sgWatchEditTodo() {
  yield takeEvery("EDIT_TODO_SG", sgEditTodo);
}
export {
  sgWatchGetList,
  sgWatchAddTodo,
  sgWatchRemoveTodo,
  sgWatchActiveTodo,
  sgWatchCheckAll,
  sgWatchEditTodo,
};
