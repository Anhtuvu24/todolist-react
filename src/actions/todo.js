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

export const activeTodo = (index) => {
    return {
        type: 'ACTIVE-TODO',
        payload: index,
    }
}

export const editTodo = ({name, id}) => {
    return {
        type: 'EDIT-TODO',
        name: name,
        id: id,
    }
}

export const checkALL = (check) => {
    return {
        type: 'CHECKALL',
        payload: check,
    }
}

