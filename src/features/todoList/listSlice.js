import { createSlice } from "@reduxjs/toolkit";
import { List, merge } from "immutable";
const initialState = {
  list: List([]),
};
const listTodo = createSlice({
  name: "listTodo",
  initialState,
  reducers: {
    addTodoRD: (state, action) => {
      const { id, name, isCompleted } = action.payload.payload;
      const newTodo = {
        id,
        name,
        isCompleted,
      };
      const new_List = state.list.push(newTodo);
      return {
        ...state,
        list: new_List,
      };
    },
    removeTodoRD: (state, action) => {
      console(action.payload.payload);
      debugger;
      const new_List = state.list.delete(action.payload.payload.index);
      debugger;
      // return state.list.delete(action.payload);
      return {
        ...state,
        list: new_List,
      };
    },
    getListRD: (state, action) => {
      const new_List = List(action.payload);
      return {
        ...state,
        list: new_List,
      };
    },
    activeTodo: (state, action) => {
      const flag = state.list.getIn([action.payload, "isCompleted"]);
      // state.getin([action.payload, 'isCompleted'], ....)
      const new_List = state.list.setIn([action.payload, "isCompleted"], !flag);
      return {
        ...state,
        list: new_List,
      };
    },
    editTodo: (state, action) => {
      debugger;
      const new_List = state.list.setIn(
        [action.payload.index, "name"],
        action.payload.name
      );
      debugger;
      console.log(new_List);
      debugger;
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