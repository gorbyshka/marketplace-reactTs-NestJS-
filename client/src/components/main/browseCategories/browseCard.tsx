import React from 'react';

import {
    CardBrowse,
    ImgBlock,
    Img,
    CardNameBlock,
    NameCard
} from '../../../assets/styles/main/browseCategoriesStyle.style';

import { BrowseCardtype } from '../../../types/main/browseCardType';

export const BrowseCard: React.FC<BrowseCardtype> = React.memo((

    { backgroundCard, itemCard, nameCard }

) => {

    return (

        <CardBrowse >

            <ImgBlock

                style={{
                    backgroundImage: `url(${backgroundCard})`
                }}

            >

            </ImgBlock>

            <Img

                src={itemCard}
                alt={nameCard}
                
            />

            <CardNameBlock>

                <NameCard >

                    {nameCard}

                </NameCard >

            </CardNameBlock>

        </CardBrowse>

    );

});
