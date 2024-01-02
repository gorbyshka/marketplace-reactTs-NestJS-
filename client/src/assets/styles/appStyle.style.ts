import styled, {
  createGlobalStyle,
  keyframes
} from "styled-components";

import { Header } from "../../components/header/header";
import { Main } from "../../components/main/main";

export const GlobalStyle = createGlobalStyle`

  @font-face {

    font-family: 'Work Sans';
    src: url('../fonts/WorkSans-VariableFont_wght.ttf');

  }

  body {

    font-family: 'Work Sans', sans-serif;
    background-color: var(--Background, #2B2B2B);

  }

  a,
  button { cursor: pointer; }

  img {

    transition: transform 0.3s ease-in-out;
  
    &:hover { transform: scale(1.1); }

  }

  p,
  span,
  small { color: #fff; }

`;

const fadeIn = keyframes`

  from {

    opacity: 0;
    transform: translateY(-20px);

  }

  to {

    opacity: 1;
    transform: translateY(0);

  }

`;

export const AnimatedHeader = styled(Header)` animation: ${fadeIn} 3s ease-in; `;

export const AnimatedMain = styled(Main)` animation: ${fadeIn} 3s ease-in; `;
