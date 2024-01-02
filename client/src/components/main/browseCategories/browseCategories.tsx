import React from "react";

import {
  Container,
  NameContainer,
  NameTitle,
  CardContainer,
} from "../../../assets/styles/main/browseCategoriesStyle.style";

import { browseItem } from "../../../constants/main/browseItem";

import { BrowseCard } from "./browseCard";

export const BrowseCategories: React.FC = React.memo(() => {

  return (

    <Container>

      <NameContainer>

        <NameTitle>

          Browse Categories

        </NameTitle>

      </NameContainer>

      <CardContainer>

        {browseItem.map((item) => {

          return (

            <BrowseCard

              key={item.id}
              backgroundCard={item.backgroundCard}
              itemCard={item.itemCard}
              nameCard={item.nameCard}

            />

          );

        })}

      </CardContainer>

    </Container >

  );

});
