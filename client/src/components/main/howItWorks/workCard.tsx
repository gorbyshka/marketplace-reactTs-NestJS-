import React from "react";

import {
    CardImgBlock,
    CardSmallBlock,
    CardSmallText,
    Card,
    CardItems,
    CardName,
    CardNameBlock,
    Img
} from "../../../assets/styles/main/howItWorksStyle.style";

import { WorkCardType } from "../../../types/main/workCardType";

export const WorkCard: React.FC<WorkCardType> = React.memo((

    { img, name, text }
    
) => {

    return (

        <Card>

            <CardItems>

                <CardImgBlock>

                    <Img

                        src={img}
                        alt={name}

                    />

                </CardImgBlock>

                <CardNameBlock>

                    <CardName>

                        {name}

                    </CardName>

                </CardNameBlock>

                <CardSmallBlock>

                    <CardSmallText>

                        {text}

                    </CardSmallText>

                </CardSmallBlock>

            </CardItems>

        </Card>

    );

});
