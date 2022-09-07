import React from 'react';
import TodoList from './TodoList'
import { themes, Theme } from './theme';

class ThemeProvider extends React.Component {
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
        const { theme } = this.state;
        return (
            <Theme.Provider value={{ theme, toggleTheme: this.toggleTheme }}>
                <TodoList />
            </Theme.Provider>
        )
    }
}

export default ThemeProvider;