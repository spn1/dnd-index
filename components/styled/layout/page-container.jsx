import styled from 'styled-components';

const PageContainer = styled.div`
    max-width: ${({ theme }) => theme.breakpoints.desktop};
    width: 100%;
    height: ${props => props['max-height'] ? '100%' : 'auto' };
    min-height: inherit;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        padding: 0 var(--spacing-large);
    }
`;

export { PageContainer };