import styled from "styled-components";
import colors from "./colors";
import fonts from "./font_names";
import Ellipse from "../images/ellipse.png";

export const HeroContainer = styled.div`
  background-size: cover;
  background-color: black;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
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
  color: ${colors.white};
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
  color: ${colors.white};
  text-transform: uppercase;
  margin-left: 22vw;
`;

export const MissionDescription = styled.div`
  font-family: ${fonts.itc_avante_garde}, sans-serif;
  width: 34vw;
  margin-left: 66px;
  color: ${colors.white};
  margin-top: 50px;
  font-size: ${fonts.BodySize};
`;

export const MissionCTA = styled.a`
  background-color: ${colors.white};
  border-radius: 12.19px;
  font-family: ${fonts.space_mono};
  padding: 30px 70px;
  color: ${colors.black};
  text-decoration: none;
  font-size: ${fonts.BodySize};
`;

export const CTASection = styled.div`
  margin-top: 68px;
  margin-bottom: 185px;
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
  padding-top: 117px;
  padding-bottom: 77px;
`;

export const Numbers = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.black};
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
  background: url(${Ellipse}) center no-repeat;
  background-size: 27vw;
`;

export const NumberText = styled.div`
  font-size: ${fonts.NumbersSize};
`;

export const NumberDescription = styled.div`
  font-size: ${fonts.LargeBook};
`;
