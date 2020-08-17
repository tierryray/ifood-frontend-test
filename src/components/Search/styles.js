import styled from 'styled-components';

import SearchBar from 'material-ui-search-bar';

export const SearchBox = styled.div``;

export const SearchInput = styled(SearchBar)`
    display: flex;
    align-items: center;
    height: 40px;
    padding: 2px 4px;
    margin-left: 20px;
    border: 1px solid #f2f2f2;
    border-radius: 2px;
    background: #f7f7f7;
    transition: 0.2s ease-in-out all;
    font-family: 'Montserrat', sans-serif;
    box-shadow: none;
    border: 1px solid #f2f2f2;

    &.Mui-focused {
    }
`;
