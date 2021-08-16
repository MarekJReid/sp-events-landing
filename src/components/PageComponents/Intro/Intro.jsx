import React, { useRef, useEffect, useState } from "react";
import {gsap } from "gsap";
import ComingSoonMobile from "../ComingSoon/ComingSoonMobile";
import { BC1 } from "../../../styles/Typography";
import {
  IntroContainer,
} from "./Intro.css";
const Intro = () => {
  let intro = useRef(null)
  const [visable, setVisable] = useState(false)

  useEffect(() => {
    gsap.fromTo(intro, 1, { autoAlpha: 0, y: 15 }, { autoAlpha: 1, y: 0, delay: .5 });
    setTimeout(() => {
      setVisable(true)
    }, 500);
  }, []);

  return (
    <IntroContainer
    ref={(element) => {
      intro = element;
    }}
    visable={visable}
    >
      <ComingSoonMobile />
      <BC1>
        For general enquiries, please contact us at &nbsp;
        <a href="loremipsum@spevents.com.au">enquiries@spevents.com.au</a>.&nbsp;
        Otherwise, please sign up for updates from the Scott Pickett Group and
        to be the first to know when our new site is live.
      </BC1>
    </IntroContainer>
  );
};

export default Intro;
