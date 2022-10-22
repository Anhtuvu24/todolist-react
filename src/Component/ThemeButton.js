import React, { useContext } from "react";
import { Theme } from "./theme";
import { Switch } from "antd";
import "../CSS/Theme.css";
import "antd/dist/antd.css";

function ThemeButton() {
  const theme = useContext(Theme);
  return (
    <>
      {/* <button className='themeButton' onClick={theme.toggleTheme} style={{ backgroundColor: theme.theme.backgroundColor, color: theme.theme.color }}>
                Change theme
            </button> */}
      <Switch
        onClick={theme.toggleTheme}
        checkedChildren="Light"
        unCheckedChildren="Pink"
        defaultChecked
      />
    </>
  );
}
export default ThemeButton;