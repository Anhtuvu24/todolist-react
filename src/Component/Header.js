import React from 'react';
//import ReactDOM from 'react-dom';
import '../CSS/Header.css'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            keyWord: '',
        }
    };

    handleAddTodo = () => {
        const {todo} = this.state;
        if(todo !== '') {
        this.props.addTodo(todo);
        this.setState({todo: ''})
        }
    };

    handleKeyPress = (e) => {
        const {todo} = this.state;
        if(todo !== '' && e.key === 'Enter') {
            this.props.addTodo(todo);
            this.setState({todo: ''})
        }
    };

    handleChange = (e) => {
        this.setState({todo: e.target.value});
    };
//------------------------------Search------------------------------
    handleSearchKeyPress = (e) => { //
        if(e.key === 'Enter') {
            this.handleSearch();
        }
    };

    handleSearch = () => {
        const {keyWord} = this.state;
        this.props.setKeySearch(keyWord);
    } 

    handleChangeSearch = (e) => {
        this.setState({keyWord: e.target.value});
    };

    render() {
        const {todo, keyWord} = this.state;
        return(
            <div>
                <div className='searchKeyWord'>
                    <input type = 'text' placeholder='Key word' value = {keyWord} onChange = {this.handleChangeSearch} onKeyDown = {this.handleSearchKeyPress} />    
                    <button type = "submit" onClick={this.handleSearch}>Search</button>
                </div>
                <div className='Container-header'>
                    <h1>TODO LIST</h1>
                    <input type = "text" placeholder = "What do you want to do?" value = {todo} onKeyDown = {this.handleKeyPress}  onChange={this.handleChange}/>
                    <button type = "submit" onClick={this.handleAddTodo}>Add</button>
                </div>
            </div>
        )
    }
}

export default Header;

