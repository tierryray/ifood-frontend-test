import React from 'react';

import { SearchBox, SearchInput } from './styles';

function Search({ setSearchTerm }) {
    return (
        <SearchBox>
            <SearchInput
                placeholder="Procurar..."
                onChange={(value) => setSearchTerm(value)}
                onCancelSearch={() => setSearchTerm('')}
            />
        </SearchBox>
    );
}

export default Search;
