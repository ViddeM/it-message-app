import React from 'react';
import { BodyContainer, BodyCard, BodyText, BodyTitleText, BodyInput, BodyInputOverlay, CharacterCountText } from './styles.js';
import { PrimaryButton, DangerButton } from '../../elements/Buttons/styles.js';
import { VBox } from '../../elements/VBox/styles.js';
import { HBox } from '../../elements/HBox/styles.js'; 

export const Body = (props) =>
    <BodyContainer>
        <BodyCard>
            <VBox>
                <BodyTitleText>Message</BodyTitleText>
                <BodyInputOverlay>
                    <BodyInput onKeyUp={props.onInputChange} onChange={props.onInputChange} maxLength={props.totalCount.toString()}/>
                </BodyInputOverlay>
                <CharacterCountText>Character count: {props.count}/{props.totalCount}</CharacterCountText>
                <HBox style={{marginTop: "auto"}}>
                    <DangerButton>Cancel</DangerButton>
                    <PrimaryButton>Confirm</PrimaryButton>
                </HBox>
            </VBox>
        </BodyCard>
    </BodyContainer>