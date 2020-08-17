import styled from 'styled-components';

import { AppBar, Box, IconButton } from '@material-ui/core';

export const StyledAppBar = styled(AppBar)`
    background: #fff;
    box-shadow: inset 0 -1px 0 #dcdcdc;

    .MuiToolbar-gutters {
        padding: 10px 20px;
    }
`;

export const Logo = styled(Box)`
    display: flex;
    align-items: center;

    img {
        width: 60px;
    }
`;
