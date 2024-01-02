import React from 'react';

import {
    PhotoCard,
    PhotoName,
    Photo,
    CardInfo,
    SmallPhotos,
    ContainerText,
    BlockCounter,
    OwnerName,
    PhotoOwner
} from '../../../assets/styles/main/trendingCollectionStyle.style';

import { TrendType } from '../../../types/main/trendType';

export const CardTrend: React.FC<TrendType> = React.memo((

    { srcPhotoMain, srcPhotoFirst, srcPhotoSecond, alt, name, srcIcon, owner }

) => {

    return (

        <CardInfo>

            <PhotoCard>

                <Photo

                    src={srcPhotoMain}
                    alt={alt}

                />

            </PhotoCard>

            <SmallPhotos>

                <Photo

                    src={srcPhotoFirst}
                    alt={alt}

                />

                <Photo

                    src={srcPhotoSecond}
                    alt={alt}

                />

                <BlockCounter>

                    1025+

                </BlockCounter>

            </SmallPhotos>

            <ContainerText >

                <PhotoName>

                    {name}

                </PhotoName>

                <PhotoOwner>

                    <Photo

                        src={srcIcon}
                        alt={alt}

                    />

                    <OwnerName>

                        {owner}

                    </OwnerName>

                </PhotoOwner>

            </ContainerText>

        </CardInfo>

    );

});
