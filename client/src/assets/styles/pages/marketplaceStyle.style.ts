import styled, { keyframes } from "styled-components";

export const vibrationAnimation = keyframes`

  0% { transform: translateX(0); }
  25% { transform: translateX(-3px); }
  50% { transform: translateX(3px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(2px); }
  
`;

export const MarketContainer = styled.div`

    margin-top: 100px;
    margin-left: 150px;

`;

export const TextContainer = styled.div``;

export const Name = styled.p`

  font-size: 51px;
  font-style: normal;
  font-weight: 600;

`;

export const InputBlock = styled.div`

  display: flex;
  width: 1050px;
  height: 30px;
  padding: 12px 0px;
  justify-content: center;
  align-items: center;
  background-color: #3B3B3B;
  gap: 10px;
  border-radius: 20px;
  border: 1px solid var(--Background---Secondary, #3B3B3B);
  margin-top: 30px;

`;

export const NameSmall = styled.p` font-size: 22px; `;

export const MarketInput = styled.input`

  width: 980px;
  height: 30px;
  background-color: #3B3B3B;
  border: none;
  outline: none;
  color: white;
  font-size: 20px;

`;

export const ToggleButtons = styled.div`

  display: flex;
  margin-top: 90px;
  justify-content: center;
  gap: 230px;

`;

export const ToggleButton = styled.button<{ selected: boolean }>`

  width: 200px;
  padding: 10px 20px;
  background-color: transparent;
  color:${(props) => (props.selected ? 'white' : '#858584')};
  border: none;
  border-bottom: ${(props) => (props.selected ? '2px solid white' : 'transparent')};
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  margin-right: 10px;
  font-size: 18px;

`;

export const ContainerCards = styled.div`

  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  padding: 245px;
  margin-top: -130px;
  margin-left: -40px;

  & > * {
    flex: 0 0 calc(33.33% - 20px);
  }

`;

export const ComingSoonContainer = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh; 

`;

export const ComingSoon = styled.h1`

  color: white;
  animation: ${vibrationAnimation} 0.5s ease-in-out infinite;

`;

export const NoResultText = styled.h1`

  color: red;
  animation: ${vibrationAnimation} 0.5s ease-in-out infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 220px;

`;

export const CircularCounter = styled.div`

  width: 30px;
  height: 30px;
  background-color: rgba(162, 89, 255, 1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; 
  font-weight: bold;
  margin-top: -28px;

`;
