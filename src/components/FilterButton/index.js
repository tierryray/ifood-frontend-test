import React from 'react';

import { StyledFilterButton, FilterIcon } from './styles';

function FilterButton({ filtersVisibility, setFiltersVisibility, isMobile }) {
    return (
        <StyledFilterButton
            component="span"
            onClick={() => setFiltersVisibility(!filtersVisibility)}
            styled={{ isMobile }}
        >
            <FilterIcon styled={{ filtersVisibility }} />
        </StyledFilterButton>
    );
}

export default FilterButton;
