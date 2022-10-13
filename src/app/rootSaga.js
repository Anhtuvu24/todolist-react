import { all } from "redux-saga/effects";
import { sgWatchGetList } from "../features/auth/authSaga";
export default function* rootSaga() {
  console.log("rootSaga");
  yield all([sgWatchGetList()]);
}
