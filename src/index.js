import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from './Component/ThemeProvider'
import './CSS/index.css'

ReactDOM.render (
    <div className="Container">
        <ThemeProvider />
    </div>,
  document.getElementById('root')
)
    
