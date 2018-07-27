import styled from 'styled-components';

export const Button = styled.button`
    background: gray;   
    color: brown;
    font-size: 1.5em;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 0.5em;
    border: 5px solid rgba(0,0,0,0.2);
    color: white;  
    margin: 5px;
    
    box-shadow: 0 5px #999;

    &:hover {
        background-color: darkgray;
    }
    
    &:active {
        background-color: #;
        box-shadow: none;
        transform: translateY(5px);
    }

    &:focus {
        outline:0;
    }
`;

export const PrimaryButton = Button.extend`
    background: #008CBA;

    &:hover {
        background-color: #006CAA;
    }
`

export const DangerButton = Button.extend`
    background: #f44336;

    &:hover {
        background-color: #D42310;
    }
`

export const SuccessButton = Button.extend`
    background: #4CAF50;

    &:hover {
        background-color: #3e8e41;
    }
`