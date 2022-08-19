import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
        }
    };

    handleAddTodo = () => {
        if(this.state.todo !== '') {
        this.props.addTodo(this.state.todo);
        this.setState({todo: ''})
        }
    };

    handleKeyPress = (e) => {
        if(this.state.todo !== '' && e.key === 'Enter') {
            this.props.addTodo(this.state.todo);
            this.setState({todo: ''})
        }
    };

    handleChange = (e) => {
        this.setState({todo: e.target.value});
    };

    

    render() {
        return(
            <div>
                <div className='Container-header'>
                    <h1>TODO LIST</h1>
                    <input type = "text" placeholder = "What do you want to do?" value = {this.state.todo} onKeyDown = {this.handleKeyPress}  onChange={this.handleChange}/>
                
                    <button type = "submit" onClick={this.handleAddTodo}>Add</button>
                </div>
            </div>
        )
    }
}

export default Header;


