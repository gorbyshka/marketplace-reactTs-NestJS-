import styled, {
  css,
  keyframes
} from "styled-components";

import { HeaderWrapperProps } from "../../../types/header/HeaderWrapperProps";

import { Link } from "react-router-dom";

const headerAnimation = keyframes`

  from {

    background-color: #1F1F1F;
    height: 50px; 
    transform: translateX(100%);

}

  to {

    background-color: rgba(162, 89, 255, 1);
    height: 20px; 
    transform: translateX(0);

}

`;

export const HeaderWrapper = styled.header<HeaderWrapperProps>`

  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) =>

    props.fixed &&

    css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      background: var(--Background, #1F1F1F);
      z-index: 1000;
      animation: ${headerAnimation} 0.3s ease; /* Apply animation here */
    `}

`;

export const Logo = styled.div`

  display: flex;
  align-items: center;
  margin-left: 100px;

  img {

    width: 250px; 
    height: auto;
    margin-right: 10px; 

  }

  span {

    font-size: 24px; 

  }
`;

export const Menu = styled.div`

  ul {

    margin-left: 500px;
    list-style: none;
    padding: 0;
    display: flex;

    li {

      margin-right: 60px; 
      font-size: 16px; 
      cursor: pointer;

      &:last-child {

        margin-right: 0; 

      }

    }

  }

`;

export const HeaderLink = styled(Link)`

 color: white;
 text-decoration: none;

 &:hover { color: lightgray; }

`;

export const Img = styled.img``;

export const List = styled.ul``;

export const Item = styled.li``;

export const ButtonContainer = styled.button`

  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 20px;
  background: rgba(162, 89, 255, 1);
  color: #fff; 
  padding: 0px 30px;
  border: none;
  gap: 12px;
  cursor: pointer;
  font-size: 16px; 
  margin-right: 100px;
  
`;

export const IconWrapper = styled.div``;

export const Input = styled.input`

  display: none;

`;

export const Label = styled.label`

  display: inline-block;
  cursor: pointer;

`;

export const ButtonPlus = styled.div`

  width: 25px;
  height: 25px;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin-top: 25px;

`;

export const UserBlock = styled.div`

  display: flex;
  width: 160px;
  height: 60px;
  align-items: center;
  margin-left: auto; 
  border-radius: 15px;
  background: rgba(162, 89, 255, 1);

`;

export const UserItems = styled.div`

  display: flex;
  justify-content: center;

`;

export const UserIcon = styled.div`

  font-size: 24px; 
  margin-top: 25px;
  margin-left: 19px;

  img {

    width: 44px;
    height: 44px;
    border-radius: 50%;

  }

`;

export const UserName = styled.p`

  font-size: 16px;
  margin-left: 5px; 

`;

export const Avatar = styled.img``;

export const Name = styled.h3``;

