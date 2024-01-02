import styled from "styled-components";

export const Container = styled.div`
  margin: 100px 0 0 300px;
`;

export const JoinMainBlock = styled.div`
  display: flex;
  width: 920px;
  padding: 60px;
  align-items: center;
  gap: 80px;
  border-radius: 20px;
  background: #3B3B3B;
`;

export const JoinItems = styled.div`
  display: flex;
`;

export const ImgBlock = styled.div``;

export const JoinImg = styled.img``;

export const JoinBlockText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin-left: 80px;
`;

export const NameTitle = styled.div``;

export const Name = styled.p`
  font-size: 38px;
  font-weight: 600;
  line-height: 120%;
  margin-top: -1px;
`;

export const SmallTitle = styled.div``;

export const SmallName = styled.p`
  margin-top: -20px;
  font-size: 22px;
  line-height: 160%;
`;

export const InputBlock = styled.div`
  display: flex;
  height: 50px;
  width: 215px;
  gap: 12px;
  border-radius: 20px;
  background: var(--Text, #FFF);
`;

export const JoinInput = styled.input`
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 20px;
  background: var(--Text, #FFF);
  border: none;
  text-align: center;
  outline: none;
`;

export const JoinButton = styled.button`
  display: flex;
  height: 50px;
  padding: 0px 50px;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  border-radius: 20px;
  background: var(--Call-to-Action, #A259FF);
  color: white;
  border: none;
`;
