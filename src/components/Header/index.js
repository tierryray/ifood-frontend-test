import React from 'react';
import { Toolbar } from '@material-ui/core';

import { StyledAppBar, Logo } from './styles';

import Search from '../Search';

import iFoodWhiteLogo from '../../assets/images/logo/ifood-white.png';

// import { Container } from './styles';

function Header() {
    return (
        <StyledAppBar position="static">
            <Toolbar>
                <Logo>
                    <img src={iFoodWhiteLogo} alt="iFood" />
                </Logo>
                <Search />
            </Toolbar>
        </StyledAppBar>
    );
}

export default Header;
