import styled from 'styled-components';
import { motion } from 'framer-motion';

import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';

export const StyledCard = styled(motion.div)`
    position: relative;

    div {
        position: relative;
        cursor: pointer;
        transition: 0.25s ease-in-out opacity;
        opacity: 1;

        &.visible {
            opacity: 0.2;
        }

        img {
            width: 100%;
            height: 100%;
            box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
                0px 3px 4px 0px rgba(0, 0, 0, 0.14),
                0px 1px 8px 0px rgba(0, 0, 0, 0.12);
        }
    }

    a {
        display: flex;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: 0.25s ease-in-out opacity;
        text-decoration: none;

        &.visible {
            opacity: 1;
        }
    }
`;

export const PlayIcon = styled(PlayCircleFilled)`
    color: #000;
    font-size: 52px;

    @media screen and (min-width: 500px) {
        font-size: 68px;
    }
`;
