import React, { Fragment } from 'react';
import Link from 'next/link';

import { ThemeProvider } from 'styled-components';
import { light, dark } from '../global/styles';

import { BodyContainer } from '../styled/body-container';
import { GlobalStyle } from '../global/global-style';

const Layout = ({children}) => {
    return (
        <Fragment>
            <GlobalStyle />
            <ThemeProvider theme={dark}>
                <Link href='/' >
                    <a>
                       INDEX
                    </a>
                </Link>
                <Link href='/monsters' >
                    <a>
                        MONSTERS
                    </a>
                </Link>
                <Link href='/classes' >
                    <a>
                        CLASSES
                    </a>
                </Link>
                <Link href='/races' >
                    <a>
                        RACES
                    </a>
                </Link>
                <BodyContainer> 
                    {children}
                </BodyContainer>
            </ThemeProvider>
        </Fragment>
    )
}

export { Layout }