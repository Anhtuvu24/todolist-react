import React, { useState, useRef } from "react";
import "../CSS/Header.css";

function Header(props) {
  const [valueInput, setValueInput] = useState("");
  const [editID, setEditID] = useState("");
  const refInput = useRef(null);
  const { ediTodoPut, setKeySearch, refFocus, postRequest } = props;

  const handleAddTodo = (id) => {
    if (valueInput !== "" && !editID) {
      postRequest(valueInput);
      setValueInput("");
    } else if (valueInput !== "" && editID) {
      ediTodoPut(valueInput, editID);
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
      ediTodoPut(valueInput, editID);
      setValueInput("");
      // setStatusInput('Add');
      setEditID(null);
    }
  };

  const onFocusInput = (name, id) => {
    refInput.current.focus();
    setValueInput(name);
    setEditID(id);
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
    <div className="Container-header">
      <h1>TODO LIST</h1>
      <input
        ref={refInput}
        type="text"
        placeholder="What do you want to do?"
        value={valueInput}
        onKeyDown={handleKeyPress}
        onChange={handleChange}
      />
      <button value="add" type="submit" onClick={() => handleAddTodo(editID)}>
        {editID ? "Edit" : "Add"}
      </button>
      <button value="search" type="submit" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default Header;
