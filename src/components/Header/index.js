import React from 'react';

import { StyledAppBar, StyledToolbar, Logo } from './styles';

import Search from '../Search';
import FilterButton from '../FilterButton';

import iFoodRedLogo from '../../assets/images/logo/ifood-red.png';

// import { Container } from './styles';

function Header({ filtersVisibility, setFiltersVisibility }) {
    return (
        <StyledAppBar position="static">
            <StyledToolbar>
                <div className="toolbar__left">
                    <Logo>
                        <img src={iFoodRedLogo} alt="iFood" />
                    </Logo>
                    <Search />
                </div>
                <FilterButton
                    filtersVisibility={filtersVisibility}
                    setFiltersVisibility={setFiltersVisibility}
                    isMobile={false}
                />
            </StyledToolbar>
        </StyledAppBar>
    );
}

export default Header;
