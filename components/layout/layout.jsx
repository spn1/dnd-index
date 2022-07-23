import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { Masthead } from '../nav/masthead';
import { Banner } from '../banner/banner';

import { lightTheme, darkTheme } from '../global/themes';
import { PageContainer } from '../container/page-container';
import { GlobalStyle } from '../global/global-style';

const Layout = ({ children }) => {
    const [theme, setTheme] = useState(lightTheme);

    const toggleTheme = () => {
        setTheme(theme.name === darkTheme.name ? lightTheme : darkTheme);
    }

    return (
        <>
            <GlobalStyle theme={theme} />
            <ThemeProvider theme={theme}>
                <Banner>
                    <Masthead toggleTheme={toggleTheme} />
                </Banner>
                <PageContainer>
                    {children}
                </PageContainer>
            </ThemeProvider>
        </>
    )
};

export { Layout };
