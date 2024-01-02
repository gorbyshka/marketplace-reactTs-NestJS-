import React from 'react';

import {
    Container,
    ImgBlock,
    NameTitle,
    SmallName,
    Name,
    JoinMainBlock,
    JoinItems,
    JoinImg,
    JoinBlockText,
    SmallTitle,
    InputBlock,
    JoinInput,
    JoinButton
} from '../../../assets/styles/main/joinOurWeeklyStyle.style';

import { AiOutlineMail } from 'react-icons/ai';

export const JoinOurWeekly: React.FC = React.memo(() => {

    return (

        <Container>

            <JoinMainBlock>

                <JoinItems>

                    <ImgBlock>

                        <JoinImg

                            src={require('../../../assets/img/join.png')}
                            alt={' Join Our Weekly Digest'}

                        />

                    </ImgBlock>

                    <JoinBlockText>

                        <NameTitle>

                            <Name>

                                Join Our Weekly Digest

                            </Name>

                        </NameTitle>

                        <SmallTitle>

                            <SmallName>

                                Get Exclusive Promotions & Updates Straight To Your Inbox.

                            </SmallName>

                        </SmallTitle>

                        <InputBlock>

                            <JoinInput

                                placeholder="Enter your email here"
                                type="text"

                            >

                            </JoinInput>

                            <JoinButton>

                                <AiOutlineMail />

                                Subscribe

                            </JoinButton>

                        </InputBlock>

                    </JoinBlockText>

                </JoinItems>

            </JoinMainBlock>

        </Container>
    );

});
