import styled from 'styled-components'

const ComingSoonWrapper = styled.div`
@media(max-width: 450px) {
    display: none;
}
`

const ComingSoonMobileWrapper = styled.div`
margin-bottom: 1.5rem;
@media (min-width: 451px) {
    display: none;
}
`

export { ComingSoonWrapper, ComingSoonMobileWrapper }