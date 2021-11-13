import styled from 'styled-components';

const NavBar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    min-height: 6rem;
    border-bottom: 1px solid var(--color-primary);
`

export { NavBar }