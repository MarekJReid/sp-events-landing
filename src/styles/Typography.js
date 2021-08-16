import styled, { createGlobalStyle, css }  from 'styled-components';
import Book from '../assets/fonts/CentraNo2-Book.woff2';
import Light from '../assets/fonts/CentraNo2-Light.woff2';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'CentraNo2Book';
    src: url(${Book});
    font-style: normal;
 
  }
  @font-face {
    font-family: 'CentraNo2Light';
    src: url(${Light}) ;
    format: ("woff");

  }
  @font-face {
    font-family: 'CentraNo2Thin';
    src: url("//db.onlinewebfonts.com/t/67bac7131607122728c4b0b04138d514.woff") ;
    format: ("woff");

  }
`

const Heading1 = styled.h1`
font-family: CentraNo2Book;
  font-size: 1.25rem;
  line-height: 1.5rem;

  @media (min-width: 600px) {
 
    font-size: 1.5rem;
    line-height: 1.17;
  }
`
const BC1 = styled.p`
font-family: CentraNo2Light;
  font-size: 1rem;
  line-height: 1.25rem;

  @media (min-width: 451px) {
  
  font-size: 1.25rem;
  line-height: 1.2;
  }
  
`
const buttonAndlabel = css`

  font-size: 0.75;
  line-height: 1.33;
  letter-spacing: 20;
  text-transform: uppercase;
`
const FFL = styled.label`
  ${buttonAndlabel};

  @media (min-width: 600px) {
  
    font-size: 1rem;
    line-height: 1;
    text-transform: uppercase;
  }
`
const FFD = styled.p`
  
  font-size: 0.75;
  color: hsl(0, 0%, 50%);

  @media (min-width: 600px) {
  
    font-size: 0.8rem;
    line-height: 1;
    color: hsl(0, 0%, 50%);
  }
`
const Button = styled.button`
${buttonAndlabel};

@media (min-width: 600px) {

  font-size: 0.75rem;
  line-height: 0.75rem;
  text-transform: uppercase;
}
`


export { Typography, Heading1, BC1, FFL, FFD, Button}