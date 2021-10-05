import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: #eb2f64;
        --color-primary-light: #FF3366;
        --color-primary-dark: #BA265D;

        --color-grey-light-1: #faf9f9;
        --color-grey-light-2: #f4f2f2;
        --color-grey-light-3: #f0eeee;
        --color-grey-light-4: #ccc;

        --color-grey-dark-1: #333;
        --color-grey-dark-2: #777;
        --color-grey-dark-3: #999;

        --shadow-dark: 0 2rem 6rem rgba(0,0,0,.3);
        --shadow-light: 0 2rem 5rem rgba(0,0,0,.06);

        --line: 1px solid var(--color-grey-light-2);
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
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        line-height: 1.6;
        background-image: palevioletred;
        background-size: cover;
        background-repeat: no-repeat;

        min-height: 100vh;
    }
`;

export { GlobalStyle };