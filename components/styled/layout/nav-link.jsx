import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const HeaderLink = styled.a`
    padding: ${({ theme }) => `${theme.spacing.xsmall} ${theme.spacing.medium}`};
    background-color: ${({ theme }) => theme.color['background-light']};
    border-radius: 5px 5px 0 0;

    :visited {
        color: ${({ theme }) => theme.color['text-primary']};
    }
`;

const NavLink = ({ href, children }) => (
    <Link href={href} passHref>
        <HeaderLink>
            {children}
        </HeaderLink>
    </Link>
)

export { NavLink }