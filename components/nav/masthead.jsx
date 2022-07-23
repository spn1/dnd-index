import React from 'react';
import { NavBar } from './nav-bar';
import { NavLink } from './nav-link';
import { PageContainer } from '../container/page-container';
import { FlexBox, FlexItem } from '../container/flex-components';
import { ThemeToggler } from '../theme-toggler';

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