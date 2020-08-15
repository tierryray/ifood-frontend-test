import styled from 'styled-components';

import { AppBar, Box } from '@material-ui/core';

export const StyledAppBar = styled(AppBar)`
    background: #ea1d2c;
`;

export const Logo = styled(Box)`
    display: flex;
    align-items: center;

    img {
        width: 60px;
    }
`;
