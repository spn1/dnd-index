import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
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
        background: ${({ theme }) => theme.color['background-default']};

        color: ${({ theme }) => theme.color['text-primary']};
        font-family: 'Roboto', sans-serif;
        font-size: 1.8rem;
        font-weight: 400;
        text-align: justify;
        line-height: 1.2;

        min-height: 100vh;
    }

    h1, h2, h3, h4 {
        margin-top: 2rem;
        text-decoration: underline;
    }

    p {
        margin-top: 0.8rem;

        & + p {
            margin-top: 1rem;
        }
    }
`;

export { GlobalStyle };