import styled from 'styled-components'

export const BodyContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`

export const BodyCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 450px;
    max-width: 100%;
    background-color: #F0F0F0;
    border-radius: 15px;
    padding: 10px;
    margin: 10px;
 
    -webkit-box-shadow: 2px 2px 10px 2px rgba(158,158,158,0.7);
    -moz-box-shadow: 2px 2px 10px 2px rgba(158,158,158,0.7);
    box-shadow: 2px 2px 10px 2px rgba(158,158,158,0.7);
`

export const BodyTitleText = styled.h3`
    text-align: center;
`

export const BodyText = styled.p`

`

export const BodyInput = styled.textarea`
    resize: none;
    background-color: white;
    margin: 3px;
    position: relative;
    width: 97%;
    height: 98%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: none;
    overflow: auto;
    
    &:focus {
        outline:0;
    }
`

export const BodyInputOverlay = styled.div`
    height:600px;
    border: 5px solid rgba(0,0,0,0.4);
    border-radius: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
    background-color: white;
`

export const CharacterCountText = styled.h3`
    text-align: right;
    margin-bottom: 10px;
`