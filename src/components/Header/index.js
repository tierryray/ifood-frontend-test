import React from 'react';

import { Container } from '@material-ui/core';

import { StyledAppBar, StyledToolbar, Logo } from './styles';

import Search from '../Search';
import FilterButton from '../FilterButton';

import iFoodRedLogo from '../../assets/images/logo/ifood-red.png';

function Header({ filtersVisibility, setFiltersVisibility, setSearchTerm }) {
    return (
        <StyledAppBar position="static">
            <Container>
                <StyledToolbar>
                    <div className="toolbar__left">
                        <Logo>
                            <img src={iFoodRedLogo} alt="iFood" />
                        </Logo>
                        <Search setSearchTerm={setSearchTerm} />
                    </div>
                    <FilterButton
                        filtersVisibility={filtersVisibility}
                        setFiltersVisibility={setFiltersVisibility}
                        isMobile={false}
                    />
                </StyledToolbar>
            </Container>
        </StyledAppBar>
    );
}

export default Header;
