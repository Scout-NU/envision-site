import styled from "styled-components";
import colors from "./colors";
import fonts from "./font_names";
import dimensions from "../styles/dimensions";
import HomeGradient1 from "../images/gradientsFINAL-home1.png";
import HomeGradient2 from "../images/gradientsFINAL-home2.png";
import HomeGradient3 from "../images/gradientsFINAL-home3.png";

export const HeroMission = styled.div`
  background: url(${HomeGradient1});
  background-size: cover;
`;

export const HeroContainer = styled.div`
  background-size: cover;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    background-color: ${colors.black};
  }
`;

export const SmallLogo = styled.img`
  display: none;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: block;
    width: 303px;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 0;
  padding-top: 308px;
  padding-left: 6vw;

  img {
    width: 50vw;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    height: 100vw;
  }
`;

export const HeroDescription = styled.div`
  font-family: ${fonts.itc_avante_garde}, sans-serif;
  font-size: ${fonts.LargeBook};
  font-weight: 500;
  width: 34vw;
  color: ${colors.black};
  padding-top: 39px;
  font-weight: 300;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 300px;
    color: ${colors.white};
    font-size: ${fonts.buttonSize};
  }
`;

export const DownIcon = styled.div`
  display: none;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    justify-content: center;
    width: 86vw;
    img {
      width: 44px !important;
      height: 44px;
      margin-top: 36px;
    }
  }
`;

export const MissionSection = styled.div`
  padding-top: 367px;
  display: flex;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    background-color: ${colors.white};
    display: block;
    width: 100%;
    padding-top: 100px;
    background: url(${HomeGradient2});
    background-size: cover;

  }
`;

export const MissionTitle = styled.div`
  font-family: ${fonts.itc_avante_garde}, sans-serif;
  font-size: ${fonts.Heading2Size};
  color: ${colors.black};
  text-transform: uppercase;
  padding-left: 22vw;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-left: 0
    text-align: center;
    font-size: ${fonts.subMobile};
    padding-top: 116px;

  }
`;

export const MissionDescription = styled.div`
  font-family: ${fonts.itc_avante_garde}, sans-serif;
  width: 34vw;
  padding-left: 66px;
  color: ${colors.black};
  padding-top: 50px;
  font-size: ${fonts.BodySize};

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 294px;
    text-align: center;
  }
`;

export const MissionCTA = styled.a`
  background-color: ${colors.black};
  border-radius: 12.19px;
  font-family: ${fonts.space_mono};
  padding: 30px 70px;
  color: ${colors.white};
  text-decoration: none;
  font-size: ${fonts.BodySize};
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding: 20px; 30px;
  }
`;

export const CTASection = styled.div`
  margin-top: 68px;
  padding-bottom: 185px;
`;

export const ArrowImage = styled.img`
  width: 58px;
  height: 58px;
  margin-top: 258px;
  padding: 70px;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding: 0px;
  }
`;

export const CarouselSection = styled.div`
  width: 100vw;
  padding-top: 68px;
  padding-bottom: 68px;
  border-top: solid 1px #ffffff;
  border-bottom: solid 1px #ffffff;
  background-color: ${colors.black};
  display: flex;
  justify-content: center;
  align-content: center;

  .carousel {
    width: 100vw;
  }
`;
export const ByTheNumbers = styled.div`
  background-color: ${colors.white};
`;

export const ByTheNumbersHeader = styled.div`
  width: 100vw;
  text-align: center;
  font-size: ${fonts.Heading2Size};
  color: ${colors.white};
  background-color: ${colors.black};
  font-family: ${fonts.itc_avante_garde};

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    font-size: ${fonts.subMobile};
  }
`;

export const Numbers = styled.div`
  background: url(${HomeGradient2});
  background-size: cover;
  display: flex;
  justify-content: space-between;
  color: ${colors.black};
  font-family: ${fonts.itc_avante_garde};
  text-align: center;
  padding-top: 194px;
  padding-bottom: 77px;
  padding-left: 6vw;
  padding-right: 6vw;
  text-align: center;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: inherit;
    text-align: left;
    padding-left: 0px;
  }
`;

export const Number = styled.div`
  width: 25vw;
  padding-top; 194px;

  height: 27vw;
  background-size: 27vw;
  position: relative;
  text-align: center;

  span {
    font-size: 48px;
    position: absolute;
    top: 100px;
    display: initial;
    transform: rotate(90deg); /* Equal to rotateZ(45deg) */
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
    height: 100%;
    text-align: right;

    span {
      font-size: 30px;
      position: relative;
      top: 0px;
      display: none;
      margin: 0px !important;
      transform: rotate(0deg); /* Equal to rotateZ(45deg) */
    }
  }
`;

export const NumberText = styled.div`
  font-size: ${fonts.NumbersLarge};
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    font-size: ${fonts.numbersMobile};
    width: 171px;
  }
`;

export const NumberContent = styled.div`
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    width: 100vw;
  }
`;

export const NumberDescription = styled.div`
  font-size: ${fonts.LargeBook};
  text-align: center;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    text-align: left;
    width: 165px;
    margin-left: 27px;
  }
`;

export const SupporterImagesSection = styled.div`
  background-color: ${colors.black};
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const SupporterImages = styled.div`
  width: 85vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const SupporterImage = styled.img`
  margin-right: 19px;
  margin-bottom: 28px;
`;
export const HomeCTAs = styled.div`
  width: 100%;
  justify-content: space-around;
  display: flex;
  padding-top: 157px;
  padding-bottom: 250px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: inline-grid;
    padding-bottom: 49px;
  }
`;

export const HomeCTA = styled.a`
  background-color: ${colors.black};
  color: ${colors.white};
  font-family: ${fonts.space_mono};
  font-size: ${fonts.BodySize};
  text-decoration: none;
  border-radius: 12px;
  padding: 30px 60px;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 37px;
    padding: 32px 20px;
  }
`;

export const WallOfLoveSection = styled.div`
background: url(${HomeGradient3});
background-size: cover;
`;

export const WallOfLoveHeader = styled.div`
  font-family: ${fonts.itc_avante_garde}, sans-serif;
  font-size: ${fonts.Heading2Size};
  color: ${colors.black};
  text-transform: uppercase;
  text-align: center;
  padding-top: 196px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    font-size: ${fonts.subMobile};
  }
`;

export const WallofLoveDescription = styled.div`
  color: ${colors.black};
  font-family: ${fonts.space_mono};
  font-size: ${fonts.BookSub};
  text-align: center;
`;

export const WallofLoveTestimonials = styled.div`
  position: relative;

  div:nth-child(1) {
    padding-left: 6vw;
    padding-top: 127px;
  }

  div:nth-child(2) {
    padding-left: 6vw;
    padding-top: 127px;

    @media (min-width: ${dimensions.maxwidthTablet}px) {
      position: absolute;
      right: 6vw;
      text-align: right;
      padding-top: 127px;
    }
  }

  div:nth-child(3) {
    padding-left: 6vw;
    padding-top: 127px;
    @media (min-width: ${dimensions.maxwidthTablet}px) {
      padding-top: 315px;
    }
  }
`;

export const WallTestimonial = styled.div`
  width: 64vw;
  font-size: ${fonts.BodySize};
  font-family: ${fonts.itc_avante_garde};

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 315px;
  }
`;
