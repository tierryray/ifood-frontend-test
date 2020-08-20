import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import { FilterList } from '@material-ui/icons';

export const FilterButton = styled(IconButton)`
    @media screen and (min-width: 500px) {
        display: none;
    }
`;

export const FilterIcon = styled(FilterList)`
    color: ${(props) => props.theme.palette.primary.main};
`;
