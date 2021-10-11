import React, { Fragment, useState } from 'react';
import Link from 'next/link';

import { ThemeProvider } from 'styled-components';
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
                <PageContainer>
                    <Link href="/">
                        <a>
                            INDEX
                        </a>
                    </Link>
                    <Link href="/monsters">
                        <a>
                            MONSTERS
                        </a>
                    </Link>
                    <Link href="/classes">
                        <a>
                            CLASSES
                        </a>
                    </Link>
                    <Link href="/races">
                        <a>
                            RACES
                        </a>
                    </Link>
                    <button onClick={toggleTheme} type='button'>
                        Switch Theme
                    </button>
                </PageContainer>
                <PageContainer>
                    {children}
                </PageContainer>
            </ThemeProvider>
        </>
    )
};

export { Layout };
