import React from 'react';

import {
    FooterContainer,
    BlockItems,
    Line,
    FooterEndBlock,
    TextEnd
} from '../../assets/styles/footer/footerStyle.style';

import { FirstColumn } from './firstColumn';
import { SecondColumn } from './secondColumn';
import { ThirdColumn } from './thirdColumn';

export const Footer: React.FC =  React.memo(() => {

    return (

        <FooterContainer>


            <BlockItems>

                <FirstColumn />

                <SecondColumn />

                <ThirdColumn />

            </BlockItems>

            <Line />

            <FooterEndBlock>

                <TextEnd>

                    Ⓒ NFT Market. Use this template freely.

                </TextEnd>

            </FooterEndBlock>

        </FooterContainer>

    );

});
