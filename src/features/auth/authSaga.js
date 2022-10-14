import {
  call,
  put,
  take,
  takeEvery,
  fork,
  select,
  delay,
  takeLatest,
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
  console.log(payload);
  debugger;
  const { id, index } = payload.payload;
  debugger;
  yield instance.delete(`todo/${id}`);
  console.log(removeTodoRD());
  debugger;
  yield put(removeTodoRD(index));
}
function* sgWatchRemoveTodo() {
  yield takeEvery("REMOVE_TODO_SG", sgRemoveTodo);
}
export { sgWatchGetList, sgWatchAddTodo, sgWatchRemoveTodo };
