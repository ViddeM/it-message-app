import styled from 'styled-components';

export const HBox = styled.div`
    display: flex;
    display: -ms-flexbox;
    display: flex;

    -ms-flex-direction: row;
    flex-direction: row;

    -ms-flex-line-pack: start;
    align-content: flex-start;
    justify-content: space-between;
    width: 100%;
`