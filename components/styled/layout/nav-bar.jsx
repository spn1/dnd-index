import styled from 'styled-components';

const NavBar = styled.nav`
    width: 100%;
    min-height: 6rem;
    border-bottom: 2px solid var(--color-primary);

    & > * {
        padding: 0 2rem;
        /* border: 1px solid palevioletred; */
        cursor: pointer;
    }
`

export { NavBar }