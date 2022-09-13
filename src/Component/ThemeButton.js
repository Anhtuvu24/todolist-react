import React, { useContext } from 'react';
import { Theme } from './theme';
function ThemeButton() {
    const theme = useContext(Theme);
    return (
        <>
            <button onClick={theme.toggleTheme} style={{ backgroundColor: theme.theme.backgroundColor, color: theme.theme.color }}>
                Change theme
            </button>
        </>
    )
}
export default ThemeButton;