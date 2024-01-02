import React from "react";

import {
    Card,
    NumberCard,
    Number,
    ImageCard,
    CardName,
    CardPrice,
    Total,
    Price,
    Text,
    Img
} from "../../../assets/styles/main/topCreatorsStyle.style";

import { CreatorType } from "../../../types/main/creatorType";

export const CardCreator: React.FC<CreatorType> = React.memo((

    { count, cardSrc, cardName }

) => {

    return (

        <>

            <Card>

                <NumberCard>

                    <Number>

                        {count}

                    </Number>

                </NumberCard>

                <ImageCard>

                    <Img

                        src={cardSrc}
                        alt={cardName}

                    />

                </ImageCard>

                <CardName>

                    <Text>

                        {cardName}

                    </Text>

                </CardName>

                <CardPrice>

                    <Total>

                        Total Sales: {' '}

                    </Total>

                    <Price>

                        34.53{' '} ETH

                    </Price>

                </CardPrice>

            </Card>

        </>

    );

});
