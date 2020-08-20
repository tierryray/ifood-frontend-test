import React, { useEffect, useCallback } from 'react';
import { Redirect } from 'react-router-dom';

import { motion } from 'framer-motion';

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
        const authEndpoint = `https://accounts.spotify.com/authorize?client_id=${
            process.env.REACT_APP_SPOTIFY_CLIENT_ID
        }&response_type=token&redirect_uri=${window.location.toString()}`;
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
                <StyledBox
                    animate={{ y: [-150, 0], opacity: [0, 1] }}
                    transition={{
                        ease: 'easeOut',
                        duration: 1.0,
                    }}
                >
                    <InfoBox>
                        <motion.img src={iFoodRedLogo} alt="iFood" />
                        <motion.h1>SpotiFood</motion.h1>
                        <motion.span>E ouvir música comendo, pode?</motion.span>
                        <motion.span>Não só pode, como deve!</motion.span>
                    </InfoBox>
                    <ButtonBox>
                        <LoginButton variant="contained" onClick={handleSignIn}>
                            BORA!
                        </LoginButton>
                    </ButtonBox>
                </StyledBox>
            )}
        </StyledContainer>
    );
}

export default Login;
