import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import PlaylistCard from '../PlaylistCard';

import { Section } from './styles';

function Playlists({ playlists }) {
    return (
        <Section>
            <Grid container spacing={3}>
                {playlists.map((playlist) => (
                    <PlaylistCard key={playlist.id} playlist={playlist} />
                ))}
            </Grid>
        </Section>
    );
}

Playlists.propTypes = {
    playlists: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Playlists;
