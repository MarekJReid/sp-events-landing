import styled from "styled-components";
const HeroImageContainer = styled.div`
 
  margin-bottom: 3.25rem;
  width: 100%;
  @media (min-width: 451px) {
    margin-bottom: 2rem;
    width: 100%;
  }
`;

const DesktopHeroImage = styled.div`
 visibility: hidden;
  @media (max-width: 451px) {
    display: none;
  }
`;

const MobileHeroImage = styled.div`
 visibility: hidden;
  @media (min-width: 451px) {
    display: none;
  }
`;

export { HeroImageContainer, DesktopHeroImage, MobileHeroImage };
