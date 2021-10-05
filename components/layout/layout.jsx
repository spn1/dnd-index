import React, { Fragment } from 'react';
import Link from 'next/link';

import { ThemeProvider } from 'styled-components';
import { light, dark } from '../styled/global/styles';

import { BodyContainer } from '../styled/layout/body-container';
import { GlobalStyle } from '../styled/global/global-style';

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={dark}>
      {dark}
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
      <BodyContainer>
        {children}
      </BodyContainer>
    </ThemeProvider>
  </>
);

export { Layout };
