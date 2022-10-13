export const getList = (data) => ({
  type: "GET_LIST",
  payload: data,
});

export const addTodoSG = (data) => ({
  type: "ADD_TODO_SG",
  payload: data,
});

export const removeTodoSG = (data) => ({
  type: "REMOVE_TODO_SG",
  payload: data,
});

export const activeTodoSG = (data) => ({
  type: "ACTIVE_TODO_SG",
  payload: data,
});

export const editTodoSG = (data) => ({
  type: "EDIT_TODO_SG",
  payload: data,
});

export const checkAllSG = (data) => ({
  type: "CHECK_ALL_SG",
  payload: data,
});
