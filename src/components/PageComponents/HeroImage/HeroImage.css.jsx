import styled from "styled-components";
const HeroImageContainer = styled.div`
  visibility: ${(props) => (props.visable ? "visable" : "hidden")};
  margin-bottom: 3.25rem;
  width: 100%;
  @media (min-width: 451px) {
    margin-bottom: 2rem;
    width: 100%;
  }
`;

const DesktopHeroImage = styled.div`
  @media (max-width: 451px) {
    display: none;
  }
`;

const MobileHeroImage = styled.div`
  @media (min-width: 451px) {
    display: none;
  }
`;

export { HeroImageContainer, DesktopHeroImage, MobileHeroImage };
