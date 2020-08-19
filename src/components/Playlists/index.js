import React from 'react';
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

export default Playlists;
