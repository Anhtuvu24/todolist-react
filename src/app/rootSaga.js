import { all } from "redux-saga/effects";
import {
  sgWatchGetList,
  sgWatchAddTodo,
  sgWatchRemoveTodo,
} from "../features/auth/authSaga";
export default function* rootSaga() {
  console.log("rootSaga");
  yield all([sgWatchGetList(), sgWatchAddTodo(), sgWatchRemoveTodo()]);
}
