import styled from 'styled-components';

const Title = styled.h1`
    color: ${({ theme }) => theme.color.primary};
    font-size: var(--heading-size-x-large);
`;

export { Title };