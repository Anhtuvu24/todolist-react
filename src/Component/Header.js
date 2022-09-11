import React, { useState, useRef } from 'react';
//import ReactDOM from 'react-dom';
import '../CSS/Header.css'

function Header(props) {
    const [valueInput, setValueInput] = useState('');
    const [statusInput, setStatusInput] = useState('Add');
    const [editID, setEditID] = useState('');
    const refInput = React.createRef();

    const handleAddTodo = (id) => {
        const { addTodo, editTodo } = props;
        if (valueInput !== '' && statusInput === 'Add') {
            addTodo(valueInput);
            setValueInput('');
        }
        else if (valueInput !== '' && statusInput === 'Edit') {
            editTodo(valueInput, id);
            setValueInput('');
            setStatusInput('Add');
        }
    };

    const handleKeyPress = (e) => {
        const { addTodo, editTodo } = props;
        const { valueInput, statusInput, editID } = this.state;
        if (statusInput === 'Add' && valueInput !== '' && e.key === 'Enter') {
            addTodo(valueInput);
            setValueInput('')
        }
        else if (statusInput === 'Edit' && valueInput !== '' && e.key === 'Enter') {
            editTodo(valueInput, editID);
            setValueInput('');
            setStatusInput('Add');
        }
    };
    //------------------------------Search------------------------------
    // handleSearchKeyPress = (e) => { //
    //     if(e.key === 'Enter') {
    //         this.handleSearch();
    //     }
    // };

    const onFocusInput = (name, id) => {
        this.refInput.current.focus();
        setValueInput(name);
        setStatusInput('Edit');
        setEditID(id);
        //console.log(this.refInput) // -> input
    }

    const handleSearch = () => {
        const { valueInput } = this.state;
        props.setKeySearch(valueInput);
    }

    const handleChange = (e) => {
        setValueInput(e.target.value);
    };
    return (
        <div className='Container-header'>
            <h1>TODO LIST</h1>
            <input
                ref={refInput}
                type="text"
                placeholder="What do you want to do?"
                value={valueInput}
                onKeyDown={handleKeyPress}
                onChange={handleChange}
            />
            <button value='add' type="submit" onClick={() => handleAddTodo(editID)}>{statusInput}</button>
            <button value='search' type="submit" onClick={handleSearch}>Search</button>
        </div>
    )
}

export default Header;