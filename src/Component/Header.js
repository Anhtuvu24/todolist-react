import React from 'react';
//import ReactDOM from 'react-dom';
import '../CSS/Header.css'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueInput: '',
        }
    };

    handleAddTodo = () => {
        const {valueInput} = this.state;
        if(valueInput !== '') {
            this.props.addTodo(valueInput);
            this.setState({valueInput: ''})
        }
    };

    handleKeyPress = (e) => {
        const {valueInput} = this.state;
        if(valueInput !== '' && e.key === 'Enter') {
            this.props.addTodo(valueInput);
            this.setState({valueInput: ''})
        }
    };
//------------------------------Search------------------------------
    // handleSearchKeyPress = (e) => { //
    //     if(e.key === 'Enter') {
    //         this.handleSearch();
    //     }
    // };

    handleSearch = () => {
        const {valueInput} = this.state;
        this.props.setKeySearch(valueInput);
    } 

    handleChange = (e) => {
        this.setState({valueInput: e.target.value});
    };

    render() {
        const {valueInput} = this.state;
        return(
            <div>
                <div className='Container-header'>
                    <h1>TODO LIST</h1>
                    <input type = "text" placeholder = "What do you want to do?" value = {valueInput} onKeyDown = {this.handleKeyPress}  onChange={this.handleChange}/>
                    <button value='add' type = "submit" onClick={this.handleAddTodo}>Add</button>
                    <button value='search' type = "submit" onClick={this.handleSearch}>Search</button>
                </div>
            </div>
        )
    }
}

export default Header;


