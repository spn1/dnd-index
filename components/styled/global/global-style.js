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

        --spacing-xlarge: 2.4rem;
        --spacing-large: 2.0rem;
        --spacing-medium: 1.6rem;
        --spacing-small: 1.2rem;
        --spacing-xsmall: 0.8rem;

        --breakpoint-mobile: calc(480px);
        --breakpoint-tablet: 768px;
        --breakpoint-desktop: calc(1080px);
        --breakpoint-widescreen: calc(1280px);
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

        @media only screen and (max-width: var(--breakpoint-desktop)) {
            font-size: 50%;
        }
    }

    body {
        background: ${({ theme }) => theme.color.background};

        color: ${({ theme }) => theme.color['text-primary']};
        font-family: 'Poppins', sans-serif;
        font-size: 2.0rem;
        font-weight: 400;
        line-height: 1.6;

        min-height: 100vh;
    }
`;

export { GlobalStyle };