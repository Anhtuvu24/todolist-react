import React from 'react';
import {Theme}   from './theme';
class ThemeButton extends React.Component {

    render() {
        return(
            <>
                <Theme.Consumer> 
                    {({theme, toggleTheme}) => (
                        <button onClick={toggleTheme} style={{backgroundColor: theme.backgroundColor, color: theme.color}}>
                            {'Light' ? 'Dark' : 'Light'}
                        </button>
                    )}
                </Theme.Consumer>
            </>
        )
    }
}
export default ThemeButton;