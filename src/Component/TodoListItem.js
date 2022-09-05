import React from 'react';
import Todo from './Todo';
import paginationSub from './pagination-hoc';

class TodoListItem extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        const {list, numberPage, removeTodo, setUpdate, handleCheckBox} = this.props;
        return(
            <div>
                {list.map((todo, index) => {
                    debugger;
                    if(index < (numberPage * 3) && index >= (numberPage * 3 - 3)) {
                    debugger;
                        return (
                            <Todo 
                                name={todo.name} 
                                isCompleted={todo.isCompleted}
                                index={index}
                                removeTodo={removeTodo} 
                                handleCheckBox={handleCheckBox}
                                id={todo.id}
                                setUpdate = {setUpdate}
                                key={todo.id}
                            />
                    ) 
                    }
                    return null;
                })}
            </div>
        )
    }
}

const TodoListItemHOC =  paginationSub(TodoListItem);

export default TodoListItemHOC;