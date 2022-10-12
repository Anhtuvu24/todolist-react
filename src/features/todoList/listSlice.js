import { createSlice } from "@reduxjs/toolkit";
import Immutable from "immutable";
import { List, merge } from "immutable";
const initialState = {
  list: List([]),
};
const listTodo = createSlice({
  name: "listTodo",
  initialState,
  reducers: {
    addTodoRD: (state, action) => {
      const new_List = state.list.push(action.payload);
      return {
        ...state,
        list: new_List,
      };
    },
    removeTodoRD: (state, action) => {
      const new_List = state.list.delete(action.payload);
      // return state.list.delete(action.payload);
      return {
        ...state,
        list: new_List,
      };
    },
    getListRD: (state, action) => {
      const new_List = List(action.payload);
      debugger;
      return {
        ...state,
        list: new_List,
      };
    },
    activeTodo: (state, action) => {
      debugger;
      // const flag = state.list.getIn([action.payload, isCompleted]);
      // state.getin([action.payload, 'isCompleted'], ....)
      const new_List = state.list.setIn([action.payload, "isCompleted"], true);
    },
    editTodo: (state, action) => {
      const new_List = state.list.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.name = action.payload.name;
        }
      });
      return {
        ...state,
        list: new_List,
      };
    },
    checkALL: (state, action) => {
      const new_List = [...state.list];
      new_List.map((todo) => {
        todo.isCompleted = action.payload;
      });
      return {
        ...state,
        list: new_List,
      };
    },
  },
});

const { reducer, actions } = listTodo;
debugger;
export const {
  addTodoRD,
  removeTodoRD,
  getListRD,
  activeTodo,
  editTodo,
  checkALL,
} = actions;
export const actionsCheck = listTodo.actions;
export default reducer;
