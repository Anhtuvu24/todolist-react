import React, { useRef } from "react";
import Todo from "./Todo";
import usePaginationSub from "./pagination-hoc";
import { connect } from "react-redux";
import "../CSS/scrollBot.css";

function TodoListItem(props) {
  let scrollRef = useRef();
  const {
    removeTodoDelete,
    handleCheckBoxPut,
    statusList,
    keySearch,
    editMode,
    todoListRD,
  } = props;
  const [limitTodo, isLoading, onScrollBot] = usePaginationSub(todoListRD);
  const setScrollRef = (e) => {
    scrollRef = e;
  };
  const onScrollBottom = () => {
    onScrollBot(scrollRef);
  };
  return (
    <div className="scrollBot" onScroll={onScrollBottom} ref={setScrollRef}>
      {todoListRD.map((todo, index) => {
        if (
          ((todo.isCompleted && statusList === "Complete") ||
            (!todo.isCompleted && statusList === "Active") ||
            statusList === "All") &&
          (keySearch ? todo.name.includes(keySearch) : true) &&
          index < limitTodo
        ) {
          return (
            <Todo
              name={todo.name}
              isCompleted={todo.isCompleted}
              index={index}
              removeTodoDelete={removeTodoDelete}
              handleCheckBoxPut={handleCheckBoxPut}
              id={todo.id}
              key={todo.id}
              editMode={editMode}
            />
          );
        }
        return null;
      })}

      {isLoading && <div>Loading...</div>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todoListRD: state.list,
  };
};
// const TodoListItemHOC = paginationSub(TodoListItem);

export default connect(mapStateToProps)(TodoListItem);
