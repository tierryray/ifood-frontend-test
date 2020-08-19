import styled from 'styled-components';

import { Card } from '@material-ui/core';

export const StyledCard = styled(Card)`
    a {
        display: block;
    }

    img {
        width: 100%;
        height: 100%;
        box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
            0px 3px 4px 0px rgba(0, 0, 0, 0.14),
            0px 1px 8px 0px rgba(0, 0, 0, 0.12);
    }
`;
