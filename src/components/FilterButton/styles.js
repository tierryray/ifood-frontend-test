import styled, { css } from 'styled-components';
import { IconButton } from '@material-ui/core';
import { FilterList } from '@material-ui/icons';

export const StyledFilterButton = styled(IconButton)`
    ${({ styled: { isMobile } }) =>
        isMobile
            ? css`
                  @media screen and (min-width: 500px) {
                      display: none;
                  }
              `
            : css`
                  @media screen and (max-width: 500px) {
                      display: none;
                  }
              `}
`;

export const FilterIcon = styled(FilterList)`
    color: ${({ styled: { filtersVisibility } }) =>
        filtersVisibility ? '#CCC' : '#ea1d2c'};
`;
