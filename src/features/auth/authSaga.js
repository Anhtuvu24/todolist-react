import { fork, take } from "redux-saga/effects";
import { actionsCheck } from "../todoList/listSlice";

function* addTodoRDS() {
  const action = yield take(actionsCheck.addTodoRD.type);
  yield fork(handleAddTodo, action.payload);
}

export function* handleAddTodo(payload) {
  console.log(payload);
}

export default function* authSaga() {
  yield fork(addTodoRDS);
}
