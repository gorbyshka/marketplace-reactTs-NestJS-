import styled from "styled-components";

export const Container = styled.div`
  margin: 100px 0 0 300px;
`;

export const CreatorsName = styled.div`
  font-size: 38px;
  font-weight: 600;
`;

export const CreatorsAddition = styled.div`
  display: flex;
`;

export const CreatorsSmall = styled.div`
  font-size: 22px;
`;

export const CreatorsButton = styled.div`
  margin-left: 100px;
  margin-top: -10px;
`;

export const Button = styled.button`
  display: flex;
  height: 60px;
  padding: 0px 50px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 20px;
  background: var(--Background, #2B2B2B);
  color: rgba(162, 89, 255, 1);
  border: 2px solid var(--Call-to-Action, #A259FF);
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 40px; 
  padding: 40px; 
  margin-top: 30px;
  margin-left: -40px;
`;

export const Card = styled.div`
  display: flex;
  position: relative; 
  width: 230px;
  height: 270px;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background: #3B3B3B;
`;

export const NumberCard = styled.div`
  display: flex;
  position: absolute; 
  top: 20px; 
  left: 20px; 
  height: 30px;
  width: 30px;
  gap: 10px;
  align-items: center;
  text-align: center;
  border-radius: 20px;
  background: var(--Background, #2B2B2B);
  justify-content: center;
`;

export const Number = styled.p`
  color: var(--caption-label-text, #858584);
`;

export const ImageCard = styled.div`
  margin-top: 20px;
`;

export const CardName = styled.div`
  font-size: 22px;
  font-weight: 600;
`;

export const CardPrice = styled.div`
  display: flex;
`;

export const Total = styled.p`
  color: var(--caption-label-text, #858584);
`;

export const Price = styled.p`
  margin-left: 5px;
`;

export const Img = styled.img``;

export const Text = styled.p``;
