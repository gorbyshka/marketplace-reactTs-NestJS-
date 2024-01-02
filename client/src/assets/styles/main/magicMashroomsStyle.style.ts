import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 640px;
  margin-top: 60px;
  background-image: url(${require('../../img/fonTimer.png')});
  background-repeat: no-repeat; 
  background-size: cover; 
`;

export const MagicBlock = styled.div`
  display: flex;
  margin: 200px 400px 0 0;
`;

export const MagicItems = styled.div``;

export const IconBlock = styled.div`
  display: flex;
  padding: 10px 20px;
  align-items: center;
  gap: 12px;
  width: 110px;
  height: 30px;
  border-radius: 20px;
  background: #3B3B3B;
`;

export const IconName = styled.p``;

export const Img = styled.img``;

export const NameTitle = styled.p`
  font-size: 51px;
  font-weight: 600;
`;

export const MagicBtn = styled.button`
  display: flex;
  height: 60px;
  padding: 22px 50px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 20px;
  background: var(--Text, #FFF);
  color: rgba(162, 89, 255, 1);
  border: none;
`;

export const NameBtn = styled.p`
  margin-left: 12px;
  color: var(--Background, #2B2B2B);
`;

export const AuctionTimeBlock = styled.div`
  display: flex;
  width: 300px;
  height: 150px;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  border-radius: 20px;
  background: rgba(59, 59, 59, 0.50);
  backdrop-filter: blur(5px);
  margin-top: 330px;
`;

export const TimerItemsBlock = styled.div`
   margin-right: 30px;
`;

export const Timer = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

export const DoubleDot = styled.span`
  padding-left: 15px;
`;

export const TimerItem = styled.span`
  padding-left: 40px; 
  font-size: 12px;
`;

export const TimerNum = styled.span`
  padding-left: 25px; 
  font-size: 38px;
  font-weight: 700;
`;

export const TimerTextBlock = styled.div``;

export const Small = styled.p`
  font-size: 12px;
  margin-left: 28px;
`;

export const BlockSmallText = styled.div`
   display: flex;
   paddind: 10px 100px 0 0;
`;

export const Hours = styled.p``;

export const Minutes = styled.p``;

export const Seconds = styled.p``;
