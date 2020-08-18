import styled from 'styled-components';

import { AppBar, Box, Toolbar } from '@material-ui/core';

export const StyledAppBar = styled(AppBar)`
    background: #fff;
    box-shadow: inset 0 -1px 0 #dcdcdc;

    .MuiToolbar-gutters {
        padding: 10px 20px;
    }
`;

export const StyledToolbar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .toolbar__left {
        display: flex;
        align-items: center;
    }
`;

export const Logo = styled(Box)`
    display: flex;
    align-items: center;

    img {
        width: 60px;
    }
`;
