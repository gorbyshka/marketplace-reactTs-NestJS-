import React from "react";

import {
  Container,
  NameTitle,
  SmallName,
  CardsContainer,
  TextBlock,
  NameTitleBlock,
  SmallNameBlock
} from "../../../assets/styles/main/howItWorksStyle.style";

import { workItem } from "../../../constants/main/workItem";

import { WorkCard } from "./workCard";

export const HowItWorks: React.FC = React.memo(() => {

  return (

    <Container>

      <TextBlock>

        <NameTitleBlock>

          <NameTitle>

            How It Works

          </NameTitle>

        </NameTitleBlock>

        <SmallNameBlock>

          <SmallName>

            Find Out How To Get Started

          </SmallName>

        </SmallNameBlock>

      </TextBlock>

      <CardsContainer>

        {workItem.map((item) => {

          return (

            <WorkCard

              key={item.id}
              img={item.img}
              name={item.name}
              text={item.text}

            />

          );

        })}

      </CardsContainer>

    </Container>

  );

});
