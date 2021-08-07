import React, { useRef, useEffect, useState } from "react";
import {gsap } from "gsap";
import { StaticImage } from "gatsby-plugin-image";
import { HeroImageContainer, DesktopHeroImage, MobileHeroImage } from "./HeroImage.css";

const HeroImage = () => {
  let image = useRef(null)
  useEffect(() => {
    gsap.fromTo(image, 1, { autoAlpha: 0, y: 15 }, { autoAlpha: 1, y: 0 });
   
  }, []);
  return (
    <HeroImageContainer ref={(element) => {
      image = element;
    }}>
      <DesktopHeroImage>
      <StaticImage 
        aspectRatio= "1.65"
      placeholder="blurred"
        src="../../../assets/images/landing.jpg"
        alt="Chancery Lane"
      />
      </DesktopHeroImage>
 
       <MobileHeroImage>
       <StaticImage 
       
       placeholder="blurred"
        src="../../../assets/images/landing.jpg"
        alt="Chancery Lane"
      />
       </MobileHeroImage>

    </HeroImageContainer>
  );
};

export default HeroImage;
