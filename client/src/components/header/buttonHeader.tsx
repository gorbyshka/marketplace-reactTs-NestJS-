import React from 'react';

import {
    ButtonContainer,
    IconWrapper
} from '../../assets/styles/header/headerStyle.style';

import { ButtonHeaderProps } from '../../types/header/ButtonHeaderProps';

import { GoPerson } from 'react-icons/go';

export const ButtonHeader: React.FC<ButtonHeaderProps> = React.memo(({ onOpenAuth }) => {

    return (

        <ButtonContainer onClick={onOpenAuth}>

            <IconWrapper>

                <GoPerson />

            </IconWrapper>

            Sign Up

        </ButtonContainer>

    );

});
