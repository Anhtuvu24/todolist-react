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

function* sgGetList() {
  const res = yield instance.get(`todo`);
  yield put(getListRD(res.data));
}

function* sgWatchGetList() {
  yield takeEvery("listTodo / getListRD", sgGetList);
}
export { sgWatchGetList };
