import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import reducerTodo from "../features/todoList/listSlice";

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
  list: reducerTodo,
});
const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware(
      {
        serializableCheck: false,
      }
    ).concat(sagaMiddleware),
    
});

sagaMiddleware.run(rootSaga);

export default store;