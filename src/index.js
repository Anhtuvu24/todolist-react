import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './Component/TodoList'
import {themes, Theme} from './Component/theme';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    }
  }

  render() {
    const { theme, toggleTheme } = this.state;
    return(
      <Theme.Provider value = {{theme, toggleTheme}}>
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
    
