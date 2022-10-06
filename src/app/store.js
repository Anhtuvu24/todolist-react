import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import listTodo from "../features/todoList/listSlice";

const reducer = combineReducers({
  list: listTodo,
});

const store = configureStore({
  reducer: reducer,
  middleware: [thunk],
});

export default store;
