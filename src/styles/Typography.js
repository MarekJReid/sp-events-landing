import styled, { createGlobalStyle, css }  from 'styled-components';
import Book from '../assets/fonts/CentraNo2-Book.woff2';
import Light from '../assets/fonts/CentraNo2-Light.woff2';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'CentraNo2';
    src: url(${Book});
    font-style: normal;
    font-weight: 600;
  }
  @font-face {
    font-family: 'CentraNo2';
    src: url(${Light});
    font-style: normal;
    font-weight: 400;
  }
`

const H1 = styled.h1`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.5rem;

  @media (min-width: 600px) {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.75rem;
  }
`
const BC1 = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25rem;

  @media (min-width: 600px) {
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.5rem;
  }
  
`
const buttonAndlabel = css`
  font-weight: 600;
  font-size: 0.75;
  line-height: 1rem;
  letter-spacing: 20;
  text-transform: uppercase;
`
const FFL = styled.label`
  ${buttonAndlabel};

  @media (min-width: 600px) {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1rem;
    text-transform: uppercase;
  }
`
const FFD = styled.p`
  font-weight: 400;
  font-size: 0.75;
  line-height: 1rem;
  color: hsl(0, 0%, 50%);

  @media (min-width: 600px) {
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 0.8rem;
    color: hsl(0, 0%, 50%);
  }
`
const Button = styled.button`
${buttonAndlabel};

@media (min-width: 600px) {
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 0.75rem;
  text-transform: uppercase;
}
`


export { Typography, H1, BC1, FFL, FFD, Button}