import styled from 'styled-components';

export const Section = styled.section`
    height: 100%;
`;

export const StyledEmptyMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: inherit;
    width: 100%;
    margin-top: -10%;
    color: #ccc;

    @media screen and (min-width: 500px) {
        margin: 0;
    }

    svg {
        color: #ccc;
        font-size: 56px;
        margin-bottom: 10px;
    }
`;
