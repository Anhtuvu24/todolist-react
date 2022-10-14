import {TYPE} from '../constant/type';

const initState = {
    list: [],
}

const todoReducer = (state = initState.list, action) => {
    switch (action.type) {
        case TYPE.ADD_TODO : {
            const new_List = [...state.list];
            new_List.push(action.payload);
            debugger;
            return {
                ...state,
                list: new_List,
            };
        }
        case TYPE.REMOVE_TODO : {
            const new_List = [...state.list];
            new_List.splice(action.payload, 1);
            return {
                ...state,
                list: new_List,
            };
        }
        case TYPE.GET_LIST: {
            const getList = [...action.payload];
            console.log('abc')
            return {
                ...state,
                list: getList,
            }
        }
        case TYPE.ACTIVE_TODO: {
            const new_List = [...state.list];
            new_List[action.payload].isCompleted = !new_List[action.payload].isCompleted;
            return {
                ...state,
                list: new_List,
            };
        }

        case TYPE.EDIT_TODO: {
            const new_List = [...state.list];
            new_List.map(todo => {
                if(todo.id === action.id) {
                    todo.name = action.name;
                }
            })
            return {
                ...state,
                list: new_List,
            }
        }

        case TYPE.CHECKALL: {
            const new_List = [...state.list];
            new_List.map(todo => {
                todo.isCompleted = action.payload;
            })
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