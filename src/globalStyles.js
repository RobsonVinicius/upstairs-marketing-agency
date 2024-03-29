import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
    text-decoration: none;
  }
`;

export const Container = styled.div `
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button `
  border-radius: 4px;
  background: ${({primary}) => (primary ? '#FFC312' : '#F79F1F')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
  color: #000;
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  font-weight: 600;
  border: none;
  outline: none;
  cursor: pointer; 

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({primary}) => (primary ? '#F79F1F' : '#FFC312')}
  }

  @media screen and (max-width: 960px) {
    width: 100%;    
  }

`


export default GlobalStyle;