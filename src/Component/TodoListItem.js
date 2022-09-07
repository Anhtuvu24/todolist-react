import React from 'react';
import Todo from './Todo';
import paginationSub from './pagination-hoc';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props)
        this.scrollRef = React.createRef();
    }

    scrollBottomDom = (dom) => {
        return (dom.scrollHeight - dom.clientHeight) - dom.scrollTop;
    };

    onScrollBot = () => {
        const { onScroll, limitTodo, list } = this.props;
        const bot = this.scrollBottomDom(this.scrollRef);
        if (bot < 3 && (limitTodo < list.length)) {
            onScroll();
        }
    }



    setScrollRef = (e) => {
        this.scrollRef = e;
    }

    render() {
        const { list, removeTodo, setUpdate, handleCheckBox, isLoading, limitTodo, statusList, keySearch, editMode } = this.props;
        return (
            <div onScroll={this.onScrollBot} ref={this.setScrollRef} style={{ marginTop: 20, overflowY: "scroll", height: 200 }}>
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
                                setUpdate={setUpdate}
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
}

const TodoListItemHOC = paginationSub(TodoListItem);

export default TodoListItemHOC;