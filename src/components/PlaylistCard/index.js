import React from 'react';

import { Grid } from '@material-ui/core';

import { StyledCard } from './styles';

function PlaylistCard({ playlist }) {
    return (
        <Grid item md={3} lg={3} sm={4} xs={6}>
            <StyledCard elevation={0}>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={playlist.external_urls.spotify}
                >
                    <img alt={playlist.name} src={playlist.images[0].url} />
                </a>
            </StyledCard>
        </Grid>
    );
}

export default PlaylistCard;
