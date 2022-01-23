import React from 'react';
import { ThemeToggler } from './theme-toggler';
import { NavBar } from '../styled/nav/nav-bar';
import { NavLink } from '../styled/nav/nav-link';
import { PageContainer } from '../styled/layout/page-container';
import { FlexBox, FlexItem } from '../styled/layout/flex-components';

const Masthead = ({ toggleTheme }) => (
        <NavBar>
            <PageContainer max-height>
                <FlexBox justify-content='space-between' align-items='stretch'>
                    <FlexItem>
                        <FlexBox align-items='flex-end'>
                            <NavLink href="/">
                                INDEX
                            </NavLink>
                            <NavLink href="/monsters">
                                MONSTERS
                            </NavLink>
                            <NavLink href="/classes">
                                CLASSES
                            </NavLink>
                            <NavLink href="/races">
                                RACES
                            </NavLink>
                        </FlexBox>
                    </FlexItem>
                    <FlexItem align-self='flex-end'>
                        <ThemeToggler toggleTheme={toggleTheme} />
                    </FlexItem>
                </FlexBox>
            </PageContainer>
    </NavBar>
)

export { Masthead }