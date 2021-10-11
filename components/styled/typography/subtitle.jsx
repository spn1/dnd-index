import styled from 'styled-components';

const Subtitle = styled.h2`
    color: ${({ theme }) => theme.color['primary-light']};
    font-size: var(--heading-size-small);
`;

export { Subtitle };