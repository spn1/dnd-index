import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: #E63946;
        --color-primary-light: #E63946;
        --color-primary-dark: #DA1B2B;

        --color-light-background: #DDD;
        --color-light-background-light: #FFF;
        --color-light-background-dark: #EEE;

        --color-dark-background: #111;
        --color-dark-background-light: #222;
        --color-dark-background-dark: #000;

        --color-dark-text-primary: #FFF;
        --color-light-text-primary: #000;

        --heading-size-x-large: 16rem;
        --heading-size-large: 12rem;
        --heading-size-medium: 10rem;
        --heading-size-small: 6rem;

        --font-size-large: 2.0rem;
        --font-size-medium: 1.8rem;
        --font-size-small: 1.4rem;
    }

    * {
        margin: 0;
        padding: 0;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%; // 1rem = 10px, 10px/16px = 62.5%

        @media only screen and (max-width: $bp-large) {
            font-size: 50%;
        }
    }

    body {
        background: ${({ theme }) => theme.color.background};

        color: ${({ theme }) => theme.color['text-primary']};
        font-family: 'Ubuntu', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.6;

        min-height: 100vh;
    }
`;

export { GlobalStyle };