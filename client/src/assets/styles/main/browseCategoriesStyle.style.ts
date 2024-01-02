import styled from "styled-components";

export const Container = styled.div`
  margin: 100px 0 0 300px;
`;

export const NameContainer = styled.div``;

export const NameTitle = styled.p`
  font-size: 38px;
  font-weight: 600;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 40px; 
  padding: 40px; 
  margin-top: 20px;
  margin-left: -40px;
`;

export const CardBrowse = styled.div`
  display: flex;
  width: 240px;
  height: 310px;
  background: #3B3B3B;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 20px;
  
`;

export const Img = styled.img`
  margin-top: -150px;
  z-index: 2;
`;

export const ImgBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 240px;
  z-index: 1;
  filter: blur(2px);
`;

export const Block = styled.div`
  width: 240px;
  height: 240px;
`

export const CardNameBlock = styled.div`
  display: flex;
  width: 240px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 20px;
  margin-top: 10px;
`;

export const NameCard = styled.p`
  margin-top: 40px;
  margin-left: 30px;
  font-size: 22px;
  font-weight: 600;
`;
