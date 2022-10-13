import React, { useState, useRef, useContext, useEffect } from "react";
//import ReactDOM from 'react-dom';
import Header from "./Header";
import { nanoid } from "nanoid";
import Footer from "./Footer";
import { Theme } from "./theme";
import ThemeButton from "./ThemeButton";
import TodoListItem from "./TodoListItem";
import { instance } from "./axiosURL";
import "../CSS/TodoList.css";

function TodoList(props) {
  const {
    todoListRD,
    addTodoRD,
    removeTodoRD,
    activeTodo,
    editTodo,
    checkALL,
    getList,
    addTodoSG,
  } = props;
  const [statusList, setStatusList] = useState("All");
  const [keySearch, _setKeySearch] = useState("");
  const headerRef = useRef(null);
  const theme = useContext(Theme);
  // const todoListRD = useSelector(state => state.todo.list);
  // const dispatch = useDispatch();

  ///Post request
  const postRequest = async (name) => {
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
    async function fecthApi() {
      getList();
    }
    fecthApi();
  }, []);

  // const addTodo = (name, id) => {
  //     // this.setState({list: [...this.state.list, {name: name, isCompleted: false, id: nanoid()}]});
  //     setList([...list, { name: name, isCompleted: false, id }]);
  // };

  const removeTodoDelete = async (index, id) => {
    removeTodoRD(index);
    await instance.delete(`todo/${id}`);
  };

  // const removeTodo = (index) => {
  //     let new_List = list;
  //     new_List.splice(index, 1);
  //     setList([...new_List]);
  // };

  const handleCheckBoxPut = async (id, index) => {
    const new_List = [...todoListRD];
    let statusTodo;
    statusTodo = !new_List[index].isCompleted;
    activeTodo(index);
    await instance.put(`todo/${id}`, { isCompleted: statusTodo });
  };

  const isCheckAll = () => {
    return !todoListRD.some((todo) => !todo.isCompleted);
  };

  const checkAllPut = async () => {
    const flag = !isCheckAll();
    checkALL(flag);
    for (const item of todoListRD) {
      if (item.isCompleted !== flag) {
        await instance.put(`todo/${item.id}`, { isCompleted: flag });
      }
    }
  };

  const displayList = (statusList) => {
    setStatusList(statusList);
  };

  const editMode = (name, id, index) => {
    headerRef.current.onFocusInput(name, id, index);
  };

  const ediTodoPut = async (name, id, index) => {
    editTodo({ name, id, index });
    await instance.put(`todo/${id}`, { name });
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
        />
        <div className="Container-footer">
          <b>
            <i>{todoListRD.size}</i> items
          </b>
          <button onClick={checkAllPut}>
            {isCheckAll() ? "UnCompleteALL" : "completedAll"}
          </button>
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
