import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  display: flex;
  padding: 40px 195px;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 100px;
  background: var(--Background---Secondary, #3B3B3B);
`;

export const BlockItems = styled.div`
  display: flex;
  margin-left: 170px; 
`;

export const FirstList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 327.414px;
  height: 191px;
  padding-right: 0px;
  margin-top: 20px;
  margin-right: 90px;
`;

export const SecondList = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 166px;
  gap: 30px;
`;

export const ThirdList = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 184px;
  gap: 30px;
  margin-right: 330px;
`;

export const Ul = styled.ul`
   list-style: none;
   gap: 15px;
`;

export const Li = styled.li``;

export const Logo = styled.img``;

export const Title = styled.p`
  font-size: 22px;
  font-weight: 700;
`;

export const Text = styled.p`
  line-height: 140%;
  color: #CCC;
`;

export const FooterLink = styled(Link)`
   cursor: pointer;
   text-decoration: none;
   color: #CCC;
`;

export const SocialNetworks = styled.div`
  display: flex;
  justify-content: space-around;
  margin-right: 130px;
`;

export const Line = styled.hr`
  width: 1049.414px;
  height: 1px;
  background: #858584;
`;

export const FooterEndBlock = styled.div`
   margin-right: 830px;
`;

export const TextEnd = styled.p`
  font-size: 12px;
  line-height: 110%;
  color: #CCC;
`;
