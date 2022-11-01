import React, { useState, Fragment } from "react";
import { connect } from "react-redux";

import "../CSS/navPin.css";
import TodoListItem from "./TodoListItem";

function Pin(props) {
  const {
    todoListRD,
    statusList,
    keySearch,
    removeTodoDelete,
    handleCheckBoxPut,
    editMode,
    getListActive,
    getListComplete,
  } = props;
  const [page, setPage] = useState(0);
  const [indexPin, setIndexPin] = useState(0);
  const handleBackPage = () => {
    setPage(page - 1);
    setIndexPin(indexPin - 1);
  };
  const handleNextPage = () => {
    setPage(page + 1);
    setIndexPin(indexPin + 1);
  };
  console.log("Navpin: ", indexPin);
  return (
    <React.Fragment>
      <div className="navPin">
        <div className="numberPage">
          <p className="numberPage">
            Bài viết đã ghim ({page + 1}/{todoListRD.size})
          </p>
        </div>
        <div className="backAndNext">
          <button
            onClick={handleBackPage}
            className="onBackPage"
            disabled={page === 0 ? "disabled" : ""}
          >
            Trước
          </button>
          <button
            onClick={handleNextPage}
            className="onNextPage"
            disabled={page === todoListRD.size - 1 ? "disabled" : ""}
          >
            Tiếp
          </button>
        </div>
      </div>
      <TodoListItem
        statusList={statusList}
        keySearch={keySearch}
        removeTodoDelete={removeTodoDelete}
        handleCheckBoxPut={handleCheckBoxPut}
        editMode={editMode}
        getListActive={getListActive}
        getListComplete={getListComplete}
        indexPin={indexPin}
      />
    </React.Fragment>
  );
}

const mapStateToProps = (state, ownProps) => {
  const todoListRD = state.list.list;
  return {
    todoListRD,
  };
};

const NavPinContainer = connect(mapStateToProps)(Pin);

export default NavPinContainer;
