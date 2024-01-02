import React from 'react';

import {
  Container,
  TextContainer,
  ArtNameBlock,
  ArtName,
  ArtSmallBlock,
  ArtSmall,
  ArtBtn,
  ArtRaiting,
  ArtSpan,
  ArtText,
  ArtPhotoContainer,
  ArtPhoto,
  PhotoTextBlock,
  PhotoName,
  Name,
  Block,
  Img,
  ArtIcon,
  IconText
} from '../../../assets/styles/main/digitalArtStyle.style';

import { BsRocketTakeoff } from 'react-icons/bs';

export const DigitalArt: React.FC = React.memo(() => {

  return (

    <Container>

      <TextContainer>

        <ArtNameBlock>

          <ArtName>

            Discover <br /> Digital art & <br /> Collect NFTs

          </ArtName>

        </ArtNameBlock>

        <ArtSmallBlock>

          <ArtSmall>

            NFT marketplace UI created with Anima for<br />
            Figma. Collect, buy and sell art from more <br />
            than 20k NFT artists.

          </ArtSmall>

        </ArtSmallBlock>

        <ArtBtn>

          <BsRocketTakeoff />

          Get Started

        </ArtBtn>

        <ArtRaiting>

          <Block className="left">

            <ArtSpan >

              240k+

            </ArtSpan >

            <ArtText>

              Total Sale

            </ArtText>

          </Block>

          <Block className="center">

            <ArtSpan >

              100k+

            </ArtSpan >

            <ArtText>

              Auctions

            </ArtText>

          </Block>

          <Block className="right">

            <ArtSpan >

              240k+

            </ArtSpan >

            <ArtText>

              Artists

            </ArtText>

          </Block>

        </ArtRaiting>

      </TextContainer>

      <ArtPhotoContainer>

        <ArtPhoto>

          <Img

            src={require('../../../assets/img/space-walking.png')}
            alt="Space Walking"
            
          />

        </ArtPhoto>

        <PhotoTextBlock>

          <PhotoName>

            <Name >

              Space Walking

            </Name >

          </PhotoName>

          <ArtIcon>

            <Img

              src={require('../../../assets/icons/animakid.svg').default}
              alt=" Animakid"

            />

            <IconText>

              Animakid

            </IconText>

          </ArtIcon>

        </PhotoTextBlock>

      </ArtPhotoContainer>

    </Container>

  );

});
