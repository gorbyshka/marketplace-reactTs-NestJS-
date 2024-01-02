import React from "react";

import {
    Img,
    ImgBlock,
    Card,
    Name,
    CardName,
    CardPrice,
    CardItems,
    OwnerBlock,
    Owner,
    PriceBlock,
    PriceName,
    PriceNumber,
    BidBlock,
    BidName,
    BidNumber
} from "../../../assets/styles/main/discoverNftsStyle.style";

import { DiscoverCardType } from "../../../types/main/discoverCardType";

export const DiscoverCard: React.FC<DiscoverCardType> = React.memo((

    { backgroundSrc, nameCard, ownerIcon, ownerName }

) => {

    return (

        <Card>

            <CardItems>

                <ImgBlock>

                    <Img

                        src={backgroundSrc}
                        alt={nameCard}

                    />

                </ImgBlock>

                <CardName>

                    <Name>

                        {nameCard}

                    </Name>

                </CardName>

                <OwnerBlock>

                    <Img

                        src={ownerIcon}
                        alt={ownerName}

                    />

                    <Owner>

                        {ownerName}

                    </Owner>

                </OwnerBlock>

                <PriceBlock >

                    <CardPrice>

                        <PriceName>

                            Price

                        </PriceName>

                        <PriceNumber >

                            1.63 {' '} ETH

                        </PriceNumber >

                    </CardPrice>

                    <BidBlock >

                        <BidName>

                            Highest Bid

                        </BidName>

                        <BidNumber>

                            0.33{' '} wETH

                        </BidNumber>

                    </BidBlock>

                </PriceBlock >

            </CardItems>

        </Card >

    );

});
