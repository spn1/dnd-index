import React from 'react';

const ThemeToggler = ({ toggleTheme }) => (
    <button onClick={toggleTheme} type='button'>
        Switch Theme
    </button>
)

export { ThemeToggler }
