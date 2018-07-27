import styled from 'styled-components';

export const HBox = styled.div`
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;

    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;

    -webkit-align-content: flex-start;
    -ms-flex-line-pack: start;
    align-content: flex-start;
    justify-content: space-between;
    width: 100%;
`