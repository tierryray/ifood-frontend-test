import React from 'react';
import { InputAdornment } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

import { SearchBox, SearchInput } from './styles';

function Search() {
    return (
        <SearchBox>
            <SearchInput
                placeholder="Search..."
                variant="outlined"
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                }
            />
        </SearchBox>
    );
}

export default Search;
