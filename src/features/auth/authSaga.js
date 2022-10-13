import {
  call,
  put,
  take,
  takeEvery,
  fork,
  select,
  delay,
  takeLatest,
} from "redux-saga/effects";
import { actionsCheck } from "../todoList/listSlice";
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
  yield instance.post("todo", payload);
  yield put(addTodoRD(payload));
}

function* sgWatchAddTodo() {
  const action = yield take("ADD_TODO_SG");
  yield fork(sgAddTodo, action.payload);
}
export { sgWatchGetList, sgWatchAddTodo };
