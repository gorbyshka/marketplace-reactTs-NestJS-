import styled from "styled-components";

export const Container = styled.div`
  margin: 100px 0 0 300px;
`;

export const BlockName = styled.div`
  color: var(--White, #FFF);
`;

export const NameTitle = styled.div`
  font-size: 38px;
  font-weight: 600;
`;

export const Small = styled.p`
  font-size: 22px;
  margin-top: 10px;
`;


export const CardContainer = styled.div`
  display: flex;
  margin-top: 60px;

  > * {
    margin-left: 20px; 
  }

`;

export const CardInfo = styled.div`
  flex-direction: column;
`;

export const PhotoCard = styled.div`
`;

export const SmallPhotos = styled.div`
  display: flex;
  margin-top: 15px;
  
  > * {
    margin-left: 10px; 
  }

`;

export const Photo = styled.img``;

export const BlockCounter = styled.div`
  width: 65px;
  padding: 32px 15px;
  gap: 10px;
  text-align: center;
  color: #FFF;
  font-weight: 700;
  font-size: 22px;
  border-radius: 20px;
  background: var(--Call-to-Action, #A259FF);
`;

export const ContainerText = styled.div`
  dispaly: flex;
  margin-top: 15px;
`;

export const PhotoName = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #FFF;
`;

export const PhotoOwner = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const OwnerName = styled.span`
  margin-left: 15px;
  margin-top: 5px;
`;
