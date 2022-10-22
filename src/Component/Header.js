import React, { useState, useRef, useContext } from "react";
import { Theme } from "./theme";
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import "../CSS/Header.css";

function Header(props) {
  const [valueInput, setValueInput] = useState("");
  const [editID, setEditID] = useState("");
  const [editIndex, setEditIndex] = useState("");
  const refInput = useRef(null);
  const theme = useContext(Theme);

  const { ediTodoPut, setKeySearch, refFocus, postRequest } = props;

  const handleAddTodo = (id) => {
    if (valueInput !== "" && !editID) {
      postRequest(valueInput);
      setValueInput("");
    } else if (valueInput !== "" && editID) {
      ediTodoPut(valueInput, editID, editIndex);
      setValueInput("");
      // setStatusInput('Add');
      setEditID(null);
    }
  };

  const handleKeyPress = (e) => {
    if (!editID && valueInput !== "" && e.key === "Enter") {
      postRequest(valueInput);
      setValueInput("");
    } else if (editID && valueInput !== "" && e.key === "Enter") {
      ediTodoPut(valueInput, editID, editIndex);
      setValueInput("");
      // setStatusInput('Add');
      setEditID(null);
    }
  };

  const onFocusInput = (name, id, index) => {
    refInput.current.focus();
    setValueInput(name);
    setEditID(id);
    setEditIndex(index);
  };

  const handleSearch = () => {
    setKeySearch(valueInput);
  };

  const handleChange = (e) => {
    setValueInput(e.target.value);
  };

  React.useEffect(() => {
    refFocus.current = {
      onFocusInput,
    };
  }, []);

  return (
    <div className="Container-header" style={{
      backgroundColor: theme.theme.backgroundColor,
      color: theme.theme.color,
    }}>
      <h1 style={{color: theme.theme.color}}>TODO LIST</h1>
      <input
        ref={refInput}
        type="text"
        placeholder="What do you want to do?"
        value={valueInput}
        onKeyDown={handleKeyPress}
        onChange={handleChange}
      />
      <Button style={{color: theme.theme.color}} value="add" type="submit" onClick={() => handleAddTodo(editID)}>
        {editID ? "Edit" : "Add"}
      </Button>
      <Button style={{color: theme.theme.color}} icon = {<SearchOutlined/>} value="search" type="submit" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
}

export default Header;