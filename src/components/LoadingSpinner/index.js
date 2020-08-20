import React from 'react';
import { CircularProgress } from '@material-ui/core';

import { Container } from './styles';

function LoadingSpinner() {
    return (
        <Container>
            <CircularProgress color="secondary" />
        </Container>
    );
}

export default LoadingSpinner;
