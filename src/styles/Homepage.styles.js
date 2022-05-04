import styled from "styled-components";
import colors from "./colors";
import fonts from "./font_names";
import HeroGradient from "../images/homepage-hero-gradient.png";
import NumbersGradient from "../images/homepage-numbers-gradient.png";

export const HeroContainer = styled.div`
  background: url(${HeroGradient}) center no-repeat;
  background-size: cover;
  color: ${colors.black};
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 0;
  padding-top: 233px;
  margin-left: 6vw;
  img {
    width: 50vw;
  }
`;

export const HeroDescription = styled.div`
  font-family: ${fonts.itc_avante_garde}, sans-serif;
  font-size: ${fonts.LargeBook};
  font-weight: 500;
  width: 34vw;
  margin-top: 39px;
  font-weight: 300;
`;

export const MissionSection = styled.div`
  margin-top: 367px;
  display: flex;
`;

export const MissionTitle = styled.div`
  font-family: ${fonts.itc_avante_garde}, sans-serif;
  font-size: ${fonts.Heading2Size};
  text-transform: uppercase;
  margin-left: 22vw;
`;

export const MissionDescription = styled.div`
  font-family: ${fonts.itc_avante_garde}, sans-serif;
  width: 34vw;
  margin-left: 66px;
  margin-top: 50px;
  font-size: ${fonts.BodySize};
`;

export const MissionCTA = styled.a`
  background-color: ${colors.black};
  border-radius: 12.19px;
  font-family: ${fonts.space_mono};
  padding: 30px 70px;
  color: ${colors.white};
  text-decoration: none;
  font-size: ${fonts.BodySize};
`;

export const CTASection = styled.div`
  margin-top: 68px;
  margin-bottom: 185px;
`;

export const ByTheNumbers = styled.div`
  background: url(${NumbersGradient}) center no-repeat;
  background-size: cover;
`;

export const ByTheNumbersHeader = styled.div`
  width: 100vw;
  text-align: center;
  font-size: ${fonts.Heading2Size};
  color: ${colors.white};
  background-color: ${colors.black};
  font-family: ${fonts.itc_avante_garde};
  padding-top: 117px;
  padding-bottom: 77px;
`;

export const Numbers = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.black};
  font-family: ${fonts.itc_avante_garde};
  text-align: center;
  padding-bottom: 77px;
  padding-left: 6vw;
  padding-right: 6vw;
`;

export const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25vw;
  height: 27vw;

  span {
    font-size: 48px;
  }
`;

export const NumberText = styled.div`
  font-size: ${fonts.NumbersSize};
`;

export const NumberDescription = styled.div`
  font-size: ${fonts.LargeBook};
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
  background-color: ${colors.black};
  justify-content: space-around;
  display: flex;
  padding-top: 157px;
  padding-bottom: 250px;
`;

export const HomeCTA = styled.a`
  background-color: ${colors.white};
  color: ${colors.black};
  font-family: ${fonts.space_mono};
  font-size: ${fonts.BodySize};
  text-decoration: none;
  border-radius: 12px;
  padding: 30px 60px;
`;
