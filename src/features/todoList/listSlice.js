import { createSlice } from "@reduxjs/toolkit";
const listTodo = createSlice({
  name: "listTodo",
  initialState: [],
  reducers: {
    addTodoRD: (state, action) => {
      state.push(action.payload);
    },
    removeTodoRD: (state, action) => {
      state.splice(action.payload, 1);
    },
    getListRD: (state, action) => {
      console.log(action, action.payload);
      return action.payload;
    },
    activeTodo: (state, action) => {
      state[action.payload].isCompleted = !state[action.payload].isCompleted;
    },
    editTodo: (state, action) => {
      state.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.name = action.payload.name;
        }
      });
    },
    checkALL: (state, action) => {
      const new_List = [...state];
      new_List.map((todo) => {
        todo.isCompleted = action.payload;
      });
      return new_List;
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
export default reducer;
