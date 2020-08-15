import styled from 'styled-components';

import { InputBase } from '@material-ui/core';

export const SearchBox = styled.div``;

export const SearchInput = styled(InputBase)`
    display: flex;
    align-items: center;
    padding: 2px 4px;
    margin-left: 20px;
    border: 1px solid #f2f2f2;
    border-radius: 2px;
    background: #f7f7f7;
    width: 150px;
    transition: 0.2s ease-in-out all;
    font-family: 'Montserrat', sans-serif;

    &.Mui-focused {
        width: 225px;
    }
`;
