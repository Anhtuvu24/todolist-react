import React, { useState, useRef } from 'react';
//import ReactDOM from 'react-dom';
import '../CSS/Header.css'

function Header(props) {
    const [valueInput, setValueInput] = useState('');
    const [statusInput, setStatusInput] = useState('Add');
    const [editID, setEditID] = useState('');
    const refInput = useRef(null);

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

    const onFocusInput = (name, id) => {
        refInput.current.focus();
        setValueInput(name);
        setStatusInput('Edit');
        setEditID(id);
    }

    const handleSearch = () => {
        props.setKeySearch(valueInput);
    }

    const handleChange = (e) => {
        setValueInput(e.target.value);
    };

    React.useEffect(() => {
        const { refFocus } = props;
        refFocus.current = {
            onFocusInput,
        };
    }, []);


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