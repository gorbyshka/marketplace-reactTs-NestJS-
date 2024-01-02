import React from "react";

import {
    Container,
    BlockName,
    NameTitle,
    Small,
    CardContainer
} from "../../../assets/styles/main/trendingCollectionStyle.style";

import { cardItem } from "../../../constants/main/cardItem";

import { CardTrend } from "./cardTrend";

export const TrendingCollection: React.FC = React.memo(() => {

    return (

        <Container>

            <BlockName>

                <NameTitle>

                    Trending Collection

                </NameTitle>

                <Small>

                    Checkout Our Weekly Updated Trending Collection.

                </Small>

            </BlockName>

            <CardContainer>

                {cardItem.map((item: any) => {

                    return (

                        <CardTrend

                            key={item.id}
                            srcPhotoMain={item.srcPhotoMain}
                            srcPhotoFirst={item.srcPhotoFirst}
                            srcPhotoSecond={item.srcPhotoSecond}
                            alt={item.alt}
                            name={item.name}
                            srcIcon={item.srcIcon}
                            owner={item.owner}

                        />

                    );

                })}

            </CardContainer>

        </Container>

    );

});
