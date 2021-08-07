import React from 'react'
import FacebookLogo from './FacebookLogo'
import InstagramLogo from './InstagramLogo'
import { SocialLogosContainer } from './SocialLogos.css'

const SocialLogos = () => {
    return (
        <SocialLogosContainer>
            <FacebookLogo/>
            <InstagramLogo/>
        </SocialLogosContainer>
    )
}

export default SocialLogos
