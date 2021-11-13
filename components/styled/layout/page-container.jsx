import styled from 'styled-components';

const PageContainer = styled.div`
    max-width: 1600px;
    width: 100%;
    height: ${props => props['max-height'] ? '100%' : 'auto' };
    min-height: inherit;
    margin: 0 auto;
`;

export { PageContainer };