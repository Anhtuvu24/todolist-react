import React, { useRef } from 'react';
import Todo from './Todo';
import paginationSub from './pagination-hoc';
import '../CSS/scrollBot.css'

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

    const { list, removeTodo, handleCheckBox, isLoading, limitTodo, statusList, keySearch, editMode } = props;

    return (
        <div className='scrollBot' onScroll={onScrollBot} ref={setScrollRef} style={{ overflowY: "scroll" }}>
            {list.map((todo, index) => {
                if (
                    (
                        (todo.isCompleted && statusList === 'Complete') ||
                        (!todo.isCompleted && statusList === 'Active') ||
                        statusList === 'All'
                    ) &&
                    (keySearch ? todo.name.includes(keySearch) : true) &&
                    (index < limitTodo)) {
                    return (
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