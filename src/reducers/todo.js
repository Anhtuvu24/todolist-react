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
        case 'GET-LIST': {
            const getList = [...action.payload];
            return {
                ...state,
                list: getList,
            }
        }
        case 'ACTIVE-TODO': {
            const new_List = [...state.list];
            new_List[action.payload].isCompleted = !new_List[action.payload].isCompleted;
            return {
                ...state,
                list: new_List,
            }
        }
        default:
            return state;
    }
}

export default todoReducer;