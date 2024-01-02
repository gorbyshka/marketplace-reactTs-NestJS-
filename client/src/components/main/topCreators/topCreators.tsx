import React from 'react';

import {
  Container,
  CreatorsName,
  CreatorsAddition,
  CreatorsSmall,
  CreatorsButton,
  Button,
  Text,
  CardsContainer
} from '../../../assets/styles/main/topCreatorsStyle.style';

import { BsRocketTakeoff } from 'react-icons/bs';

import { CardCreator } from './cardCreator';

import { creatorItem } from '../../../constants/main/creatorItem';

export const TopCreators: React.FC = React.memo(() => {

  return (

    <Container>

      <CreatorsName>

        <Text>

          Top Creators

        </Text>

      </CreatorsName>

      <CreatorsAddition>

        <CreatorsSmall>

          <Text>

            Checkout Top Rated Creators on the NFT Marketplace

          </Text>

        </CreatorsSmall>

        <CreatorsButton>

          <Button>

            <BsRocketTakeoff />

            View Rankings

          </Button>

        </CreatorsButton>

      </CreatorsAddition>

      <CardsContainer>

        {creatorItem.map((item) => {

          return (

            <CardCreator

              count={item.id}
              cardSrc={item.cardSrc}
              cardName={item.cardName}

            />

          );

        })}

      </CardsContainer>

    </Container>

  );

});
