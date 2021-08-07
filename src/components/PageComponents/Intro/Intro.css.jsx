import styled from 'styled-components'

const IntroContainer = styled.div`
visibility: ${props => props.visable ? 'visable' : 'hidden'};
margin-bottom: 1.25rem;
@media (max-width: 450px) {
    padding: 0 1rem;
    margin-bottom: 1.5rem;
}
`


export { IntroContainer }