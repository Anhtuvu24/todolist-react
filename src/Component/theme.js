import React from "react";
export const themes = {
  light: {
    color: "black",
    backgroundColor: "white",
  },
  dark: {
    color: "black",
    backgroundColor: "aqua",
  },
};
export const Theme = React.createContext({
  theme: themes.light,
  toggleTheme: () => {},
});
