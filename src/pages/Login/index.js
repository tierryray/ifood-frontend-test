import React, { useEffect, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import { Box, Button } from '@material-ui/core';

import useAuth from '../../hooks/useAuth';

function Login() {
    const { signed, signIn, loading } = useAuth();

    const handleSignIn = useCallback(() => {
        const authEndpoint = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${process.env.REACT_APP_SPOTIFY_REDIRECT_URL}`;
        window.location.href = authEndpoint;
    }, []);

    useEffect(() => {
        signIn();
    }, [signIn]);

    return (
        <Box>
            {signed ? (
                <Redirect to="/" />
            ) : (
                <Button variant="contained" onClick={handleSignIn}>
                    Log in to Spotify
                </Button>
            )}
        </Box>
    );
}

export default Login;
