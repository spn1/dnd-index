import styled from 'styled-components';

const FlexBox = styled.div`
    display: ${props => props.inline ? 'inline-flex' : 'flex'};
    flex: 0 0 100%;
    flex-direction: ${props => props['flex-direction'] || 'row'};
    flex-wrap: ${props => props['flex-wrap'] || 'wrap'};
    justify-content: ${props => props['justify-content'] || 'center'};
    align-items: ${props => props['align-items'] || 'stretch'};
    align-content: ${props => props['align-content'] || 'stretch'};

    position: relative;
    width: 100%;
    height: 100%;
    min-height: inherit;

    & > * {
        padding: 0 2rem;
        /* border: 1px solid palevioletred; */
        cursor: pointer;
    }
`

const FlexItem = styled.div`
    align-self: ${props => props['align-self'] || 'auto' };  
`

export { FlexBox, FlexItem }