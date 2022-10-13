import { all } from "redux-saga/effects";
import { sgWatchGetList, sgWatchAddTodo } from "../features/auth/authSaga";
export default function* rootSaga() {
  console.log("rootSaga");
  yield all([sgWatchGetList(), sgWatchAddTodo()]);
}
