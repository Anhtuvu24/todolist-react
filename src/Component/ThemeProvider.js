import React, { useState } from 'react';
import TodoList from './TodoList'
import { themes, Theme } from './theme';

function ThemeProvider() {
    const [theme, setTheme] = useState(themes.light);
    const toggleTheme = () => {
        setTheme(theme === themes.dark ? themes.light : themes.dark);
    };
    return (
        <Theme.Provider value={{ theme, toggleTheme: toggleTheme }}>
            <TodoList />
        </Theme.Provider>
    )
};

export default ThemeProvider;