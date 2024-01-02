import React from 'react';

import {
    ButtonContainer,
    Container,
    Text,
    ContainerCards,
    DiscoverBtn,
    DiscoverItems,
    DiscoverTextBlock,
    NameTitle,
    SmallName
} from '../../../assets/styles/main/discoverNftsStyle.style';

import { AiOutlineEye } from 'react-icons/ai';

import { DiscoverCard } from './discoverCard';

import { discoverItem } from '../../../constants/main/discoverItem';

export const DiscoverNfts: React.FC = React.memo(() => {

    return (

        <Container>

            <DiscoverTextBlock>

                <NameTitle>

                    Discover More NFTs

                </NameTitle>

                <DiscoverItems >

                    <SmallName>

                        Explore New Trending NFTs

                    </SmallName>

                    <ButtonContainer>

                        <DiscoverBtn>

                            <AiOutlineEye />

                            <Text>

                                See All

                            </Text>

                        </DiscoverBtn>

                    </ButtonContainer>

                </DiscoverItems >

            </DiscoverTextBlock >

            <ContainerCards>

                {discoverItem.map((item) => {

                    return (

                        <DiscoverCard

                            key={item.id}
                            backgroundSrc={item.backgroundSrc}
                            nameCard={item.nameCard}
                            ownerIcon={item.ownerIcon}
                            ownerName={item.ownerName}
                        />

                    );

                })}

            </ContainerCards>

        </Container>

    );

});
