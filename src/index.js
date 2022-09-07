import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './Component/TodoList'
import {themes, Theme} from './Component/theme';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    }
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme:
        state.theme === themes.dark
          ? themes.light
          : themes.dark,
    }));
  };

  render() {
    const { theme} = this.state;
    return(
      <Theme.Provider value = {{theme, toggleTheme: this.toggleTheme}}>
        <TodoList />
      </Theme.Provider>
    )
  }
}

ReactDOM.render (
    <div className="Container">
        <App />
    </div>,
  document.getElementById('root')
)
    
