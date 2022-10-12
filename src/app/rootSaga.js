import { all } from "redux-saga/effects";
import authSaga from "../features/auth/authSaga";

export default function* rootSaga() {
  console.log("rootSaga");
  yield all([helloSaga(), authSaga()]);
}
function* helloSaga() {
  console.log("helloSaga");
}
