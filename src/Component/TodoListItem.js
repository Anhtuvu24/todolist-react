import React, {useRef} from 'react';
import Todo from './Todo';
import paginationSub from './pagination-hoc';

function TodoListItem(props) {
    let scrollRef = useRef();
    const scrollBottomDom = (dom) => {
        return (dom.scrollHeight - dom.clientHeight) - dom.scrollTop;
    };

    const onScrollBot = () => {
        const { onScroll, limitTodo, list } = props;
        const bot = scrollBottomDom(scrollRef);
        if (bot < 3 && (limitTodo < list.length)) {
            onScroll();
        }
    };

    const setScrollRef = (e) => {
        scrollRef = e;
    };

    const { list, removeTodo,handleCheckBox, isLoading, limitTodo, statusList, keySearch, editMode } = props;
    
    return (
        <div onScroll={onScrollBot} ref={setScrollRef} style={{ marginTop: 20, overflowY: "scroll", height: 200 }}>
            {list.map((todo, index) => {
                let flag = false;
                if (
                    (
                        (todo.isCompleted && statusList === 'Complete') ||
                        (!todo.isCompleted && statusList === 'Active') ||
                        statusList === 'All'
                    ) &&
                    (keySearch ? todo.name.includes(keySearch) : true) &&
                    (index < limitTodo)) {
                    flag = true;
                    return flag && (
                        <Todo
                            name={todo.name}
                            isCompleted={todo.isCompleted}
                            index={index}
                            removeTodo={removeTodo}
                            handleCheckBox={handleCheckBox}
                            id={todo.id}
                            key={todo.id}
                            editMode={editMode}
                        />
                    )
                }
                return null;
            })}

            {isLoading && <div>Loading...</div>}
        </div>
    )
}

const TodoListItemHOC = paginationSub(TodoListItem);

export default TodoListItemHOC;