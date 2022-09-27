export const addTodoRD = (todo) => {
    return {
        type: 'ADD-TODO',
        payload: todo,
    }
};

export const removeTodoRD = (index) => {
    return { 
        type: 'REMOVE-TODO', 
        payload: index,
    }
};

export const getListRD = (list) => {
    return {
        type: 'GET-LIST',
        payload: list,
    }
}