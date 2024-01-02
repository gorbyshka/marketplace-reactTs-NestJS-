import React from 'react';

import {
  Container,
  Img,
  Small,
  NameTitle,
  MagicBlock,
  MagicItems,
  IconBlock,
  IconName,
  MagicBtn,
  AuctionTimeBlock,
  TimerItemsBlock,
  TimerTextBlock,
  Timer,
  TimerNum,
  DoubleDot,
  BlockSmallText,
  TimerItem,
  Hours,
  Minutes,
  Seconds
} from '../../../assets/styles/main/magicMashroomsStyle.style';

import { useState, useEffect } from 'react';

import { AiOutlineEye } from 'react-icons/ai';

export const MagicMashrooms: React.FC = React.memo(() => {

  const [timeLeft, setTimeLeft] = useState({ hours: 1, minutes: 30, seconds: 0 });

  useEffect(() => {

    const interval = setInterval(() => {

      setTimeLeft(prevTime => {

        const { hours, minutes, seconds } = prevTime;

        if (seconds > 0) return { ...prevTime, seconds: seconds - 1 };
        else if (minutes > 0) return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        else if (hours > 0) return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 };
        else clearInterval(interval); return prevTime;

      });

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  return (

    <Container>

      <MagicBlock>

        <MagicItems >

          <IconBlock>

            <Img

              src={require('../../../assets/icons/shroomie.svg').default}
              alt={'Shroomie'}

            />

            <IconName>

              Shroomie

            </IconName>

          </IconBlock>

          <NameTitle>

            Magic Mashrooms

          </NameTitle>

          <MagicBtn >

            <AiOutlineEye />

            See NFT

          </MagicBtn >

        </MagicItems >

      </MagicBlock>

      <AuctionTimeBlock>

        <TimerItemsBlock>

          <TimerTextBlock>

            <Small>

              Auction Ends in

            </Small>

          </TimerTextBlock>

          <>

            <Timer>

              <TimerNum>

                {timeLeft.hours.toString().padStart(2, '0')}

              </TimerNum>

              <DoubleDot>

                :

              </DoubleDot>

              <TimerNum>

                {timeLeft.minutes.toString().padStart(2, '0')}

              </TimerNum>

              <DoubleDot>

                :

              </DoubleDot>

              <TimerNum>

                {timeLeft.seconds.toString().padStart(2, '0')}

              </TimerNum>

            </Timer>

          </>

          <BlockSmallText>

            <TimerItem>

              <Hours>

                Hours

              </Hours>

            </TimerItem>

            <TimerItem>

              <Minutes>

                Minutes

              </Minutes>

            </TimerItem>

            <TimerItem>

              <Seconds>

                Seconds

              </Seconds>

            </TimerItem>

          </BlockSmallText>

        </TimerItemsBlock>

      </AuctionTimeBlock>

    </Container >

  );

});
