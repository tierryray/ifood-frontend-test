import React from 'react';

import { StyledFilterButton, FilterIcon } from './styles';

function FilterButton({ filtersVisibility, setFiltersVisibility, isMobile }) {
    return (
        <StyledFilterButton
            component="span"
            onClick={() => setFiltersVisibility(!filtersVisibility)}
            isMobile={isMobile}
        >
            <FilterIcon clicked={filtersVisibility} />
        </StyledFilterButton>
    );
}

export default FilterButton;
