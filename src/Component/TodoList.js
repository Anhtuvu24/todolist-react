import React, { useState, useRef, useContext, useEffect } from "react";
//import ReactDOM from 'react-dom';
import Header from "./Header";
import { nanoid } from "nanoid";
import Footer from "./Footer";
import { Theme } from "./theme";
import ThemeButton from "./ThemeButton";
import TodoListItem from "./TodoListItem";
import { Button } from 'antd';
import "../CSS/TodoList.css";
function TodoList(props) {
  const {
    todoListRD,
    getList,
    addTodoSG,
    removeTodoSG,
    activeTodoSG,
    checkAllSG,
    editTodoSG,
    getListActive,
    getListComplete,
  } = props;
  const [statusList, setStatusList] = useState("All");
  const [keySearch, _setKeySearch] = useState("");
  const headerRef = useRef(null);
  const theme = useContext(Theme);
  // const todoListRD = useSelector(state => state.todo.list);
  // const dispatch = useDispatch();

  ///Post request
  const postRequest = (name) => {
    const id = nanoid();
    const newTodo = {
      id,
      name: name,
      isCompleted: false,
    };
    addTodoSG(newTodo);
  };

  //Get request
  useEffect(() => {
    function fecthApi() {
      getList();
    }
    fecthApi();
  }, []);

  const removeTodoDelete = (index, id) => {
    removeTodoSG({ index, id });
  };

  const handleCheckBoxPut = (id, index) => {
    const new_List = [...todoListRD];
    let statusTodo;
    statusTodo = !new_List[index].isCompleted;
    activeTodoSG({ id, index, statusTodo });
  };

  const isCheckAll = () => {
    return !todoListRD.some((todo) => !todo.isCompleted);
  };

  const checkAllPut = () => {
    const flag = !isCheckAll();
    checkAllSG({ flag, todoListRD });
  };

  const displayList = (statusList) => {
    setStatusList(statusList);
  };

  const editMode = (name, id, index) => {
    headerRef.current.onFocusInput(name, id, index);
  };

  const ediTodoPut = (name, id, index) => {
    editTodoSG({ name, id, index });
  };

  const setKeySearch = (keySearch) => {
    _setKeySearch(keySearch);
  };
  return (
    <>
      {/* fix------------------------------------- */}
      <div
        style={{
          backgroundColor: theme.theme.backgroundColor,
          color: theme.theme.color,
        }}
        className="list-container"
      >
        <Header
          setKeySearch={setKeySearch}
          displayList={displayList}
          refFocus={headerRef}
          ediTodoPut={ediTodoPut}
          postRequest={postRequest}
        />
        <TodoListItem
          statusList={statusList}
          keySearch={keySearch}
          removeTodoDelete={removeTodoDelete}
          handleCheckBoxPut={handleCheckBoxPut}
          editMode={editMode}
          getListActive={getListActive}
          getListComplete={getListComplete}
        />
        <div className="Container-footer">
          <b>
            <i>{todoListRD.size}</i> items
          </b>
          <Button style={{color: theme.theme.color}} onClick={checkAllPut}>
            {isCheckAll() ? "UnCompleteALL" : "completedAll"}
          </Button>
          <Footer displayList={displayList} statusList={statusList} />
        </div>
      </div>
      <ThemeButton />
    </>
  );
}

// const mapStateToProps = (state) => {
//   const todoListRD = state.list.list;
//   return todoListRD;
// };

// const mapDispatchToProps = (dispatch) => ({
//   addTodoRD: (todo) => dispatch(addTodoRD(todo)),
//   removeTodoRD: (index) => dispatch(removeTodoRD(index)),
//   getListRD: (list) => dispatch(getListRD(list)),
//   activeTodo: (index) => dispatch(activeTodo(index)),
//   editTodo: ({ name, id }) => dispatch(editTodo({ name, id })),
//   checkALL: (check) => dispatch(checkALL(check)),
// });
export default TodoList;