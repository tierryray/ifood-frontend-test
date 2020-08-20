import styled from 'styled-components';
import { darken } from 'polished';
import { Container, Box } from '@material-ui/core';
import { motion } from 'framer-motion';

export const StyledContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100%;
    background: #fafafa;
    padding: 0 30px;
`;

export const StyledBox = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const InfoBox = styled(Box)`
    display: flex;
    flex-direction: column;
    color: #3e3e3e;

    h1 {
        font-size: 36px;
        margin-bottom: 20px;
    }

    span {
        font-size: 19px;

        &:last-child {
            font-weight: bold;
            color: #ea1d2c;
        }
    }

    img {
        width: 180px;
        margin-bottom: 40px;
    }

    @media screen and (min-width: 600px) {
        align-items: center;

        h1 {
            font-size: 42px;
        }

        span {
            font-size: 24px;
        }

        img {
            width: 300px;
        }
    }

    @media screen and (min-width: 800px) {
        h1 {
            font-size: 32px;
        }

        span {
            font-size: 19px;
        }

        img {
            width: 200px;
        }
    }
`;

export const ButtonBox = styled(Box)`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const LoginButton = styled(motion.button)`
    background: #ea1d2c;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    transition: 0.15s ease-out all;
    padding: 20px;
    font-weight: 500;
    font-size: 16px;
    width: 100%;

    &:hover {
        background-color: ${darken(0.1, '#ea1d2c')};
    }

    @media screen and (min-width: 800px) {
        padding: 10px;
        font-size: 18px;
        width: 200px;
        padding: 20px 10px;
    }
`;
