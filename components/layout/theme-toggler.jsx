import React from 'react';
import styled from 'styled-components';

const ThemeTogglerButton = styled.button`
    background-color: ${({ theme }) => theme.color['background-light']};
    border: none;
    border-radius: 5px;
    padding: ${({ theme }) => theme.spacing.small};
    color: ${({ theme }) => theme.color['text-primary']};
`

const ThemeToggler = ({ toggleTheme }) => (
    <ThemeTogglerButton onClick={toggleTheme} type='button'>
        Switch
    </ThemeTogglerButton>
)

export { ThemeToggler }
