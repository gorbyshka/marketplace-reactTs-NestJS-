import styled, {
  createGlobalStyle,
  keyframes
} from "styled-components";

import { ContainerProps } from "../../../types/pages/ContainerProps";

const slideInFromLeft = keyframes`

  from {

    transform: translateX(-100%);
    opacity: 0;

  }

  to {

    transform: translateX(0);
    opacity: 1;

  }

`;

const slideInFromRight = keyframes`

  from {

    transform: translateX(100%);
    opacity: 0;

  }

  to {

    transform: translateX(0);
    opacity: 1;

  }

`;

const slideInFromBottom = keyframes`

  from {

    transform: translateY(100%);
    opacity: 0;

  }

  to {

    transform: translateY(0);
    opacity: 1;

  }

`;

export const FormWrapper = styled.div`

  height: 300px;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #1F1F1F;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const Form = styled.form<ContainerProps>`

  display: flex;
  height: 250px;
  width: 400px;
  border-radius: 15px;
  flex-direction: column;
  align-items: center;
  background-color: var(--Background, #2B2B2B);
  margin-top: 250px;
  animation: ${(props) => props.isVisible ? slideInFromBottom : 'none'} 1.5s ease;

`;

export const GlobalStyles = createGlobalStyle<ContainerProps>`

  body {

    overflow: ${(props) => (props.isVisible ? 'hidden' : 'auto')};

  }

`;

export const FormContainer = styled.div`

    position: relative;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

export const FormInput = styled.input<ContainerProps>`

    width: 250px;
    margin-bottom: 10px;
    border: none;
    padding: 10px;
    border-bottom: 1px solid #a166d7;
    border-radius: 4px;
    text-align: center;
    color: white;
    outline: none;
    background-color: transparent;
    animation: ${(props) => props.isVisible ? slideInFromLeft : 'none'} 2s ease;

`;

export const FormButton = styled.button<ContainerProps>`

    display: block;
    width: 150px;
    padding: 10px;
    background: rgba(162, 89, 255, 1);
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    margin-top: 20px;
    animation: ${(props) => props.isVisible ? slideInFromRight : 'none'} 2s ease;

`;

export const ButtonsContainer = styled.div<ContainerProps>`

   display: flex; 
   gap: 20px;
   animation: ${(props) => props.isVisible ? slideInFromBottom : 'none'} 2.5s ease;

`;

export const FormOverlay = styled.div`

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const CenteredFormWrapper = styled(FormWrapper)`

  position: relative;
  height: 100vh; 
  width: 100%; 
  background-image: url(${require('../../img/formWrapper.jpg')});
  background-size: cover; 
  background-position: center center; 

`;

export const CloseButton = styled.button`

  position: absolute;
  top: -30px;
  right: -20px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  z-index: 1;

`;

export const CloseIcon = styled.span`color: white;`;
