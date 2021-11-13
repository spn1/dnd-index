import React from 'react';
import Link from 'next/link';
import { ThemeToggler } from './theme-toggler';
import { NavBar } from '../styled/layout/nav-bar';
import { PageContainer } from '../styled/layout/page-container';
import { FlexBox, FlexItem } from '../styled/layout/flex-components';

const Masthead = ({ toggleTheme }) => (
        <NavBar>
            <PageContainer max-height>
                <FlexBox justify-content='space-between' align-items='stretch'>
                    <FlexItem>
                        <FlexBox align-items='center'>
                            <Link href="/">
                                <a>
                                    INDEX
                                </a>
                            </Link>
                            <Link href="/monsters">
                                <a>
                                    MONSTERS
                                </a>
                            </Link>
                            <Link href="/classes">
                                <a>
                                    CLASSES
                                </a>
                            </Link>
                            <Link href="/races">
                                <a>
                                    RACES
                                </a>
                            </Link>
                        </FlexBox>
                    </FlexItem>
                    <FlexItem align-self='center'>
                        <ThemeToggler toggleTheme={toggleTheme} />
                    </FlexItem>
                </FlexBox>
            </PageContainer>
    </NavBar>
)

export { Masthead }