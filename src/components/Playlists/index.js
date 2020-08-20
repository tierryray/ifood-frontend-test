import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import { Replay } from '@material-ui/icons';

import PlaylistCard from '../PlaylistCard';

import { Section, StyledEmptyMessage } from './styles';

function Playlists({ playlists }) {
    return (
        <Section>
            <Grid container spacing={1} style={{ height: '100%' }}>
                {playlists.length < 1 && (
                    <StyledEmptyMessage>
                        <Replay />
                        <h3>Nenhuma playlist encontrada</h3>
                    </StyledEmptyMessage>
                )}
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
