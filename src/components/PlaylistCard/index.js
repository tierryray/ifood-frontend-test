import React from 'react';
import PropTypes from 'prop-types';

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

PlaylistCard.propTypes = {
    playlist: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.array,
            PropTypes.bool,
            PropTypes.string,
        ])
    ).isRequired,
};

export default PlaylistCard;
