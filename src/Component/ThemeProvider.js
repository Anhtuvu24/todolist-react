import React, { useState } from "react";
import TodoListContainer from "./TodoListContainer";
import { themes, Theme } from "./theme";

function ThemeProvider() {
  const [theme, setTheme] = useState(themes.light);
  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };
  return (
    <Theme.Provider value={{ theme, toggleTheme: toggleTheme }}>
      <TodoListContainer />
    </Theme.Provider>
  );
}

export default ThemeProvider;
