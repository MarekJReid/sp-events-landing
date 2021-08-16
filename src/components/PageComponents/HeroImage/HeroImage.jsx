import React, { useRef, useEffect, useState } from "react";
import {gsap } from "gsap";
import { StaticImage } from "gatsby-plugin-image";
import { HeroImageContainer, DesktopHeroImage, MobileHeroImage } from "./HeroImage.css";

const HeroImage = () => {
  let image = useRef(null)
  let imageMobile = useRef(null)
  const [visable, setVisable] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      gsap.fromTo([image, imageMobile], 1, { autoAlpha: 0, y: 15 }, { autoAlpha: 1, y: 0 });
    }, 500);
    setTimeout(() => {
      setVisable(true)
    }, 500);
  }, []);
  return (
    <HeroImageContainer 
    >
      <DesktopHeroImage
       ref={(element) => {
        image = element;
      }}
      visable={visable}
      >
      <StaticImage 
        aspectRatio= "1.65"
      placeholder="blurred"
        src="../../../assets/images/landing2.jpg"
        alt="Chancery Lane"
       
      />
      </DesktopHeroImage>
 
       <MobileHeroImage
       ref={(element) => {
        imageMobile = element;
      }}
      visable={visable}
       >
       <StaticImage 
       
       placeholder="blurred"
        src="../../../assets/images/landing2.jpg"
        alt="Chancery Lane"
       />
       </MobileHeroImage>

    </HeroImageContainer>
  );
};

export default HeroImage;
