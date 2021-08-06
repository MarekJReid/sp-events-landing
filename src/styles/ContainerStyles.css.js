import styled from 'styled-components'


const SectionWrapper = styled.div`
width: 99vw;
overflow: hidden;
padding: 0  10vw;
display: flex;
justify-content: ${props => props.justifyContent ? props.justifyContent : ''};
margin-top: ${props => props.marginTop ? props.marginTop : ''};
`

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  outline: 2px solid black;

  @media (min-width: 576px) {
    max-width: ${props => {
      switch (props.size) {
        case 'sm':
          return '540px'
        case 'md':
          return '100%'
        case 'lg':
          return '100%'
        case 'xl':
          return '100%'
        case 'xxl':
          return '100%'
        case 'fluid':
          return '100%'
        default:
          return '540px'
      }
    }}
  }

  @media (min-width: 768px) {
    max-width: ${props => {
      switch (props.size) {
        case 'sm':
          return '720px'
        case 'md':
          return '720px'
        case 'lg':
          return '100%'
        case 'xl':
          return '100%'
        case 'xxl':
          return '100%'
        case 'fluid':
          return '100%'
        default:
          return '720px'
      }
    }}
  }

  @media (min-width: 992px) {
    max-width: ${props => {
      switch (props.size) {
        case 'sm':
          return '960px'
        case 'md':
          return '960px'
        case 'lg':
          return '960px'
        case 'xl':
          return '100%'
        case 'xxl':
          return '100%'
        case 'fluid':
          return '100%'
        default:
          return '960px'
      }
    }}
  }

  @media (min-width: 1200px) {
    max-width: ${props => {
      switch (props.size) {
        case 'sm':
          return '1140px'
        case 'md':
          return '1140px'
        case 'lg':
          return '1140px'
        case 'xl':
          return '1140px'
        case 'xxl':
          return '100%'
        case 'fluid':
          return '100%'
        default:
          return '1140px'
      }
    }}
  }

  @media (min-width: 1400px) {
    max-width: ${props => {
      switch (props.size) {
        case 'sm':
          return '1320px'
        case 'md':
          return '1320px'
        case 'lg':
          return '1320px'
        case 'xl':
          return '1320px'
        case 'xxl':
          return '1320px'
        case 'fluid':
          return '100%'
        default:
          return '1320px'
      }
    }}
  }
`

export { Container, SectionWrapper }