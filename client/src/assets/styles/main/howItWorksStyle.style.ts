import styled from "styled-components";

export const Container = styled.div`
  margin: 100px 0 0 300px;
`;

export const TextBlock = styled.div``;

export const NameTitleBlock = styled.div``;

export const NameTitle = styled.p`
  font-size: 38px;
  font-weight: 600;
`;

export const SmallNameBlock = styled.div``;

export const SmallName = styled.p`
  font-size: 22px;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding: 40px;
  margin-top: 50px;
  margin-left: -40px;
`;

export const Card = styled.div`
  display: flex;
  width: 320px;
  height: 440px;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  gap: 20px;
  border-radius: 20px;
  background: var(--Background---Secondary, #3B3B3B);
`;

export const CardItems = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column; 
  align-items: center; 
`;

export const CardImgBlock = styled.div``;

export const Img = styled.img``;

export const CardTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const CardNameBlock = styled.div`
  margin-top: 10px;
`;

export const CardName = styled.p`
  font-size: 22px;
  font-weight: 600;
`;

export const CardSmallBlock = styled.div`
  width: 250px;
  margin-top: -20px;
`;

export const CardSmallText = styled.p`
  line-height: 140%;
  text-align: center;
`;
