import styled from 'styled-components'

const SocialLogosContainer = styled.div`

display: flex;
order: 1;
flex-grow: 0;

@media (min-width: 450px) {
    margin-top: 1.25rem;
    flex-grow: 1;
    width: 100%;
    order: 0;
}
`

const SocialLogo = styled.div`
:first-child {
    margin-right: 1rem;
}
:hover {
    opacity: .75;
}

svg {
    height: 2.25rem;
}
`

export { SocialLogosContainer, SocialLogo }