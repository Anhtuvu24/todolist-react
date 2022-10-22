import { all } from "redux-saga/effects";
import {
  sgWatchGetList,
  sgWatchAddTodo,
  sgWatchRemoveTodo,
  sgWatchActiveTodo,
  sgWatchCheckAll,
  sgWatchEditTodo,
} from "../features/auth/authSaga";
export default function* rootSaga() {
  yield all([
    sgWatchGetList(),
    sgWatchAddTodo(),
    sgWatchRemoveTodo(),
    sgWatchActiveTodo(),
    sgWatchCheckAll(),
    sgWatchEditTodo(),
  ]);
}