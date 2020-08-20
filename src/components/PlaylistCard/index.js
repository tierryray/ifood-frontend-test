import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { AnimatePresence } from 'framer-motion';

import { Grid } from '@material-ui/core';

import { StyledCard, PlayIcon } from './styles';

function PlaylistCard({ playlist }) {
    const [hoverVisibility, setHoverVisibility] = useState(false);

    return (
        <AnimatePresence>
            {playlist.isVisible && (
                <Grid item md={3} lg={3} sm={4} xs={6}>
                    <StyledCard
                        initial={{ scale: 1 }}
                        animate={{ scale: [0, 0.9] }}
                        whileHover={{ scale: 1 }}
                        exit={{ scale: 0 }}
                    >
                        <div
                            onMouseEnter={() => setHoverVisibility(true)}
                            onMouseLeave={() => setHoverVisibility(false)}
                            className={`${hoverVisibility ? 'visible' : ''}`}
                        >
                            <img
                                alt={playlist.name}
                                src={playlist.images[0].url}
                            />
                        </div>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={playlist.external_urls.spotify}
                            className={`${hoverVisibility ? 'visible' : ''}`}
                            onMouseEnter={() => setHoverVisibility(true)}
                            onMouseLeave={() => setHoverVisibility(false)}
                        >
                            <PlayIcon />
                        </a>
                    </StyledCard>
                </Grid>
            )}
        </AnimatePresence>
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
