import React from 'react';
//import ReactDOM from 'react-dom';
import '../CSS/Header.css'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueInput: '',
            statusInput: 'Add',
            editID: '',
        }
        this.refInput = React.createRef();
    };

    handleAddTodo = (id) => {
        const {valueInput, statusInput} = this.state;
        const { addTodo, editTodo } = this.props;
        if(valueInput !== '' && statusInput === 'Add') {
            addTodo(valueInput);
            this.setState({valueInput: ''})
        }
        else if(valueInput !== '' && statusInput === 'Edit') {
            editTodo(valueInput, id);
            this.setState({valueInput: ''})
            this.setState({statusInput: 'Add'})
        }
    };

    handleKeyPress = (e) => {
        const { addTodo } = this.props;
        const {valueInput, statusInput} = this.state;
        if(statusInput === 'Add' && valueInput !== '' && e.key === 'Enter') {
            addTodo(valueInput);
            this.setState({valueInput: ''})
        }
    };
//------------------------------Search------------------------------
    // handleSearchKeyPress = (e) => { //
    //     if(e.key === 'Enter') {
    //         this.handleSearch();
    //     }
    // };

    onFocusInput = (name, id) => {
        this.refInput.current.focus();
        this.setState({valueInput: name, statusInput: 'Edit', editID: id});
        //console.log(this.refInput) // -> input
    }

    handleSearch = () => {
        const {valueInput} = this.state;
        this.props.setKeySearch(valueInput);
    } 

    handleChange = (e) => {
        this.setState({valueInput: e.target.value});
    };

    render() {
        const {valueInput, statusInput, editID} = this.state;
        return(
            <div className='Container-header'>
                <h1>TODO LIST</h1>
                <input 
                    ref={this.refInput} 
                    type = "text" 
                    placeholder = "What do you want to do?" 
                    value = {valueInput} 
                    onKeyDown = {this.handleKeyPress}  
                    onChange={this.handleChange}
                />
                <button value='add' type = "submit" onClick={() => this.handleAddTodo(editID)}>{statusInput}</button>
                <button value='search' type = "submit" onClick={this.handleSearch}>Search</button>
            </div>
        )
    }
}

export default Header;