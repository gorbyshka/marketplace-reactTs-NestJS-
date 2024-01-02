import styled from "styled-components";


export const WalletBlock = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;

`;

export const WalletTitle = styled.div``;

export const WalletName = styled.h1`

  color: white;
  font-size: 51px;
  font-weight: 600;

`;

export const WalletText = styled.p`font-size: 22px;`;

export const WalletConnectBlock = styled.div`

  display: flex;
  flex-direction: column;
  gap: 10px;

`;

export const WalletConnectBtn = styled.button`

  display: flex;
  width: 320px;
  height: 72px;
  padding: 0px 20px 0px 40px;
  align-items: center;
  gap: 20px;
  border-radius: 20px;
  border: 1px solid var(--Call-to-Action, #A259FF);
  background: var(--Background---Secondary, #3B3B3B);

`;

export const ButtonIcon = styled.img``;

export const ButtonName = styled.p`

  font-size: 22px;
  font-weight: 600;

`;
