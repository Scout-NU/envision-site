import styled from "styled-components";
import colors from "./colors";
import fonts from "./font_names";
import dimensions from "../styles/dimensions";
import About1 from "../images/gradientsFINAL-about1.png";
import About2 from "../images/gradientsFINAL-about2.png";
import ProblemSolutionGradient from "../images/about-problem-solution-gradient.png"

export const AboutHero = styled.div`
  padding-left: 14vw;
  padding-top: 235px;
  background: url(${About1});
  background-size: cover;
  font-family: ${fonts.itc_avante_garde};
  color: ${colors.black};
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-left: 20px;
  }
`;

export const AboutHeroText = styled.div`
  font-size: ${fonts.Heading2Size};
  font-weight: 700;
  padding-bottom: 62px;
`;

export const AboutHeroParagraph = styled.div`
  display: flex;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: block;
    padding-bottom: 114px;
  }
`;

export const ParagraphColumn = styled.div`
  color: ${colors.black};
  width: 35vw;
  margin-right: 62px;
  padding-bottom: 114px;
  font-weight: 300;
  font-size: ${fonts.BodySize};

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 335px;
    padding-bottom: 44px;
  }
`;

export const AboutContainer = styled.div`
  background-color: ${colors.black};
  color: ${colors.black};
`;

export const ProblemSolution = styled.div`
  background: url(${ProblemSolutionGradient}) center no-repeat;
  background-size: cover;
  color: ${colors.black};
  padding: 5em 0;
`;

export const AboutPrinciples = styled.div`
  padding-bottom: 114px;
  background-color: ${colors.black};
  color: ${colors.white};
`;

export const PrinciplesHeader = styled.div`
  font-size: ${fonts.Heading2Size};
  text-align: center;
  padding-top: 114px;
  font-family: ${fonts.itc_avante_garde};
`;

export const PrinciplesSubHeader = styled.div`
  margin-top: 34px;
  margin-bottom: 58px;
  font-size: ${fonts.BookSub};
  text-align: center;
  font-weight: 300;
  font-family: ${fonts.itc_avante_garde};
`;

export const GuidingPrinciples = styled.div`
  display: flex;
  justify-content: center;
`;

export const GuidingPrinciple = styled.div`
  width: 44vw;
  display: flex;
  justify-content: center;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 80vw;
  }
`;

export const HeroHeadline = styled.span`
  font-weight: ${(props) => props.black ? '700' : '400'};
`;

export const GuidingPrincipleHeader = styled.div`
  font-family: ${fonts.space_mono};
  font-size: ${fonts.BookSub};
  margin-bottom: 24px;
`;

export const GuidingDescription = styled.div`
  font-family: ${fonts.itc_avante_garde};
  font-size: ${fonts.BodySize};
  margin-bottom: 24px;
`;

export const GuidingPrincipleImg = styled.img`
  width: 60px;
  height: 60px;
`;

export const GuidingPrincipleText = styled.div`
  margin-left: 57px;
`;

export const ProblemSection = styled.div`
background: url(${About2});
background-size: cover;

`

export const TheProblem = styled.div`
  margin-left: 14vw;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-left: 20px;
  }
`;

export const TheProblemHeader = styled.div`
  font-size: ${fonts.NumberSmall};
  font-family: ${fonts.itc_avante_garde};
  padding-top: 114px;
`;

export const TheProblemDescription = styled.div`
  margin-top: 34px;
  font-size: ${fonts.BodySize};
  font-family: ${fonts.itc_avante_garde};
  width: 37vw;
  font-weight: 300;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 80vw;
    margin-bottom: 100px;
  }
`;

export const SolutionWrapper = styled.div`
  position: relative;
  margin-bottom: 311px;
`;

export const TheSolution = styled.div`
  position: absolute;
  right: 11vw;
  text-align: right;
  width: 37vw;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    text-align: left;
    position: relative;
    width: 80vw;
    right: 0;
    padding-left: 20px;
  }
`;

export const TheSolutionHeader = styled.div`
  font-size: ${fonts.NumberSmall};
  font-family: ${fonts.itc_avante_garde};
  font-weight: 700;
`;

export const TheSolutionDescription = styled.div`
  margin-top: 34px;
  font-size: ${fonts.BodySize};
  font-family: ${fonts.itc_avante_garde};
  font-weight: 300;
`;

export const AboutCTA = styled.a`
  background-color: ${colors.black};
  color: ${colors.white};
  font-family: ${fonts.space_mono};
  font-size: ${fonts.BodySize};
  text-decoration: none;
  border-radius: 12px;
  padding: 30px 60px;
`;

export const AboutCTAContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  padding-bottom: 109px;
`;
