import styled from "styled-components";

export const Container = styled.div`
  margin: 100px 0 0 300px;
`;

export const DiscoverTextBlock = styled.div``;

export const NameTitle = styled.p`
  font-size: 38px;
  font-weight: 600;
`;

export const DiscoverItems = styled.div`
  display: flex;
`;

export const SmallName = styled.p`
  font-size: 22px;
`;

export const ButtonContainer = styled.div`
  margin-left: 620px;
`;

export const DiscoverBtn = styled.button`
  display: flex;
  height: 60px;
  padding: 0px 50px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 20px;
  border: 2px solid var(--Call-to-Action, #A259FF);
  font-size: 16px;
  background: var(--Background, #2B2B2B);
  color: rgba(162, 89, 255, 1);
`;

export const Text = styled.span`
  color: #fff;
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 40px; 
  padding: 40px; 
  margin-top: 20px;
  margin-left: -40px;
`;

export const Card = styled.div`
  display: flex;
  height: 500px;
  width: 330px
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background: #3B3B3B;
`;

export const CardItems = styled.div`
  margin-left: 30px;
`;

export const ImgBlock = styled.div`
 margin-left: -30px;`;

export const Img = styled.img`
  margin-top: -30px
`;

export const CardName = styled.div``;

export const Name = styled.p`
  font-size: 22px;
  font-weight: 600;
`;

export const OwnerBlock = styled.div`
  display: flex;
`;

export const Owner = styled.p`
  margin-top: -12px;
  margin-left: 12px;
`;

export const PriceBlock = styled.div`
  display: flex;
`;

export const CardPrice = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PriceName = styled.p`
  font-size: 12px;
  color: #858584;
`;

export const PriceNumber = styled.p`
  margin-top: 8px;
`;

export const BidBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
`;
  
export const BidName = styled.p`
  font-size: 12px;
  color: #858584;
`;

export const BidNumber = styled.p`
  margin-top: 8px;
`;
