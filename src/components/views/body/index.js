import React from 'react';
import { BodyContainer, BodyCard, BodyText, BodyTitleText, BodyInput, BodyInputOverlay, CharacterCountText, BodyRecieverInput } from './styles.js';
import { PrimaryButton, DangerButton } from '../../elements/Buttons/styles.js';
import { VBox } from '../../elements/VBox/styles.js';
import { HBox } from '../../elements/HBox/styles.js'; 

export const Body = (props) =>
    <BodyContainer>
        <BodyCard>
            <VBox>
                <BodyTitleText>Message</BodyTitleText>
                
                <BodyInputOverlay style={{marginBottom: "0"}}>
                    <BodyInput placeholder="Write your message here, but beware the character count!" onKeyUp={props.onInputChange} onChange={props.onInputChange} maxLength={props.totalCount.toString()}/>
                </BodyInputOverlay>
                
                <CharacterCountText style={{marginTop: "0"}}>Character count: {props.count}/{props.totalCount}</CharacterCountText>
                
                <HBox> 
                    <BodyTitleText style={{marginLeft: "10px"}}>Reciever:</BodyTitleText>
                    <BodyRecieverInput placeholder= "Enter a valid @chalmers.it mail name here." maxLength={"42"} style={{marginLeft: "10px", flexGrow: "1", paddingLeft: "2px"}} />
                </HBox>
                <BodyText>Note! Only the name e.g. for digit@chalmers.it only enter 'digit'</BodyText>
                
                <HBox style={{marginTop: "auto"}}>
                    <DangerButton>Cancel</DangerButton>
                    <PrimaryButton>Confirm</PrimaryButton>
                </HBox>
            </VBox>
        </BodyCard>
    </BodyContainer>