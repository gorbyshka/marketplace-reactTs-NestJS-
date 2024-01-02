import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 100px 0 0 300px;
`;

export const ArtNameBlock = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center; 
  margin-right: 20px;
`;

export const ArtName = styled.span`
  font-size: 70px;
  font-weight: 600;
  
`;

export const ArtSmallBlock = styled.div`
  
  margin-right: 20px;
`;

export const ArtSmall = styled.span`
  font-size: 18px;
`;

export const ArtBtn = styled.button`
  display: flex;
  height: 50px;
  padding: 0px 40px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 20px;
  color: #fff;
  font-size: 16px; 
  background: var(--Call-to-Action, #A259FF);
  border: none;
`;

export const ArtRaiting = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    align-items: center; 
    margin: 0 10px; 
  }

 .right {
    margin-left: 70px;
}

.left{
    margin-right: 70px;
}

`;

export const ArtSpan = styled.span`
  font-size: 28px;
  font-weight: 700;
`;

export const ArtText = styled.p`
  font-size: 18px;
`;

export const ArtPhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 100px;
`;

export const TextContainer = styled.div`
  
  flex-direction: column;

  & > * {
    margin-top: 40px;
  }

`;

export const ArtPhoto = styled.div`
  margin-bottom: -10px;
`;

export const PhotoName = styled.div`
  
`;

export const Name = styled.p`
  font-size: 22px;
  font-weight: 600;
`;

export const ArtIcon = styled.div`
  display: flex;
  margin-top: -20px;
`;

export const IconText = styled.p`
  margin-left: 10px;
`;

export const PhotoTextBlock = styled.div`
  display: flex;
  height: 90px;
  width: 470px;
  padding: 20px;
  flex-direction: column;
  border-radius: 0px 0px 20px 20px;
  background: var(--Background---Secondary, #3B3B3B);
  
`;

export const Img = styled.img``;

export const Block = styled.div``;
