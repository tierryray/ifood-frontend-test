import React from 'react';
import PropTypes from 'prop-types';

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

FilterButton.propTypes = {
    filtersVisibility: PropTypes.bool.isRequired,
    setFiltersVisibility: PropTypes.func.isRequired,
    isMobile: PropTypes.bool.isRequired,
};

export default FilterButton;
