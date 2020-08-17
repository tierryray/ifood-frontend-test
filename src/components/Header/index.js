import React from 'react';
import { Toolbar } from '@material-ui/core';

import { StyledAppBar, Logo } from './styles';

import Search from '../Search';

import iFoodRedLogo from '../../assets/images/logo/ifood-red.png';

// import { Container } from './styles';

function Header() {
    return (
        <StyledAppBar position="static">
            <Toolbar>
                <Logo>
                    <img src={iFoodRedLogo} alt="iFood" />
                </Logo>
                <Search />
            </Toolbar>
        </StyledAppBar>
    );
}

export default Header;
