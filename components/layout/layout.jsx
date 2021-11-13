import React, { Fragment, useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { Masthead } from './masthead';

import { light, dark } from '../styled/global/themes';
import { PageContainer } from '../styled/layout/page-container';
import { GlobalStyle } from '../styled/global/global-style';

const Layout = ({ children }) => {
    const [theme, setTheme] = useState(dark);

    const toggleTheme = () => {
        setTheme(theme.name === dark.name ? light : dark);
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
