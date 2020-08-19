import React from 'react';
import PropTypes from 'prop-types';

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

Search.propTypes = {
    setSearchTerm: PropTypes.func.isRequired,
};

export default Search;
