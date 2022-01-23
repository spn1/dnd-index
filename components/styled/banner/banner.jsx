import styled from 'styled-components';

const Banner = styled.div`
    display: flex;
    height: 280px;
    background-image: url('/banner.png'); /* image from wotc */
    background-size: cover;
    background-position: 0 -100px;
    background-repeat: no-repeat;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        height: 160px;
    }
`;

export { Banner }