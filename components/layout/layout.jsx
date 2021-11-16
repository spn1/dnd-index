import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { Masthead } from './masthead';

import { lightTheme, darkTheme } from '../styled/global/themes';
import { PageContainer } from '../styled/layout/page-container';
import { GlobalStyle } from '../styled/global/global-style';

const Layout = ({ children }) => {
    const [theme, setTheme] = useState(darkTheme);

    const toggleTheme = () => {
        setTheme(theme.name === darkTheme.name ? lightTheme : darkTheme);
    }

    return (
        <>
            <GlobalStyle theme={theme} />
            <ThemeProvider theme={theme}>
                <Masthead toggleTheme={toggleTheme} />
                <PageContainer>
                    {children}
                </PageContainer>
            </ThemeProvider>
        </>
    )
};

export { Layout };
