import styled from "styled-components";

const SignUpContainer = styled.div`
visibility: hidden;
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 450px) {
    padding: 0 1rem;
    margin-bottom: 3.5rem;
    flex-direction: column;
    width: 100%auto;
  }
`;

const SignUpForm = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 700px) {
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
  }
  @media (max-width: 450px) {
    margin-bottom: 3.5rem;
    flex-direction: column;
    width: 100%;
  }
`

const SignUpFormElement = styled.div`
  display: flex;
  flex-direction: column;
  width: 62.5%;
  @media (max-width: 701px) {
    width: 100%;
  }
`;
const Input = styled.input`
  width: 100%;
  height: 2.25rem;
  border: none;
  border-bottom: ${props => props.err ? '1px solid red' : '1px solid #333333'};
  :focus {
    outline: none;
  }
  ::placeholder {
    font-size: 0.875rem;
    color: ${props => props.err ? ' red' : 'rgba(51%, 51%, 51%, 50%)'};
  }
  @media (min-width: 800px) {
    width: 100%;
    height: 2.5rem;
  }
`;

const SignUpButton = styled.button`
  border: ${props => props.err ? '1px solid red' : '1px solid #333333'};
  color: ${props => props.err ? 'red' : '#333333'};
  background: none;
  padding: 1rem;
  width: 18%;
  align-self: flex-end;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  transition: all 0.2s ease-in-out;
  :hover {
    color: #ffffff;
    background: ${props => props.err ? 'red' : '#333333'};
 
  }
  @media (min-width: 700px) and (max-width: 1000px)  {
    width: auto;
  }
  @media (max-width: 700px) {
    align-self: auto;
    margin-top: 1.5rem;
    width: 37%;
  }
`;

export { SignUpContainer, SignUpForm, SignUpFormElement, Input, SignUpButton };
