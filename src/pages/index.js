import React, { useRef, useEffect, useState } from "react";
import {gsap } from "gsap";

import ComingSoon from "../components/PageComponents/ComingSoon/ComingSoon";
import HeroImage from "../components/PageComponents/HeroImage/HeroImage";
import Intro from "../components/PageComponents/Intro/Intro";
import ScottPickettLogo from "../components/PageComponents/ScottPickettLogo/ScottPickettLogo";
import SignUp from "../components/PageComponents/SignUp/SignUp";
import SocialLogos from "../components/PageComponents/SocialLogos/SocialLogos";

import {
  LeftContainer,
  PageContainer,
  RightContainer,
} from "../styles/ContainerStyles.css";

const IndexPage = () => {
  const [visable, setVisable] = useState(false)
  let left = useRef(null);
  let image = useRef(null);
  

  useEffect(() => {
    gsap.fromTo(left, .6, { autoAlpha: 0, x: -15 }, { autoAlpha: 1, x: 0, delay: 1.25 });
    setTimeout(() => {
      setVisable(true)
    }, 500);
   
  }, []);
  return (
    <PageContainer>
      <LeftContainer
        ref={(element) => {
          left = element;
        }}
        visable={visable}
      >
        <ComingSoon />
        <SocialLogos />
        <ScottPickettLogo />
      </LeftContainer>
      <RightContainer
        
      >
        <HeroImage />
        <Intro/>
        <SignUp />
      </RightContainer>
    </PageContainer>
  );
};

export default IndexPage;
