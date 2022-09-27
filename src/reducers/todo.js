const initState = {
    list: [],
}

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD-TODO': {
            const new_List = [...state.list];
            new_List.push(action.payload);
            return {
                ...state,
                list: new_List,
            };
        }
        case 'REMOVE-TODO': {
            const new_List = [...state.list];
            new_List.splice(action.payload, 1);
            return {
                ...state,
                list: new_List,
            };
        }
        case 'ACTIVE-TODO': {
            return state;
        }
        case 'GET-LIST': {
            const getList = [...action.payload];
            return {
                ...state,
                list:getList,
            }
        }
        default:
            return state;
    }
}

export default todoReducer;