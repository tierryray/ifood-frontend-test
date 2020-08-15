import React, { useEffect, useCallback } from 'react';
import { Redirect } from 'react-router-dom';

import {
    StyledContainer,
    StyledBox,
    InfoBox,
    ButtonBox,
    LoginButton,
} from './styles';

import useAuth from '../../hooks/useAuth';
import iFoodRedLogo from '../../assets/images/logo/ifood-red.png';

function Login() {
    const { signed, signIn } = useAuth();

    const handleSignIn = useCallback(() => {
        const authEndpoint = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${process.env.REACT_APP_SPOTIFY_REDIRECT_URL}`;
        window.location.href = authEndpoint;
    }, []);

    useEffect(() => {
        signIn();
    }, [signIn]);

    return (
        <StyledContainer>
            {signed ? (
                <Redirect to="/" />
            ) : (
                <StyledBox>
                    <InfoBox>
                        <img src={iFoodRedLogo} alt="iFood" />
                        <h1>SpotiFood</h1>
                        <span>E ouvir música comendo, pode?</span>
                        <span>Não só pode, como deve!</span>
                    </InfoBox>
                    <ButtonBox>
                        <LoginButton variant="contained" onClick={handleSignIn}>
                            Bora curtir um som!
                        </LoginButton>
                    </ButtonBox>
                </StyledBox>
            )}
        </StyledContainer>
    );
}

export default Login;
