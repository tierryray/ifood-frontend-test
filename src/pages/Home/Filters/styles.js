import styled from 'styled-components';
import { Form } from '@unform/web';

export const StyledForm = styled(Form)`
    display: flex;
    align-items: center;
    margin-top: 15px;

    .unform__field {
        margin: 10px;
    }

    @media screen and (max-width: 760px) {
        flex-direction: column;
        justify-content: flex-start;
        margin-top: 0;

        .unform__field {
            margin: 5px 0;
        }
    }
`;
