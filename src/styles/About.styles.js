import styled from "styled-components";
import colors from "./colors";
import fonts from "./font_names";

export const AboutHero = styled.div`
  margin-left: 14vw;
  padding-top: 115px;
  font-family: ${fonts.itc_avante_garde};
`;

export const AboutHeroText = styled.div`
  font-size: ${fonts.Heading2Size};
  font-weight: 700;
  margin-bottom: 62px;
`;

export const AboutHeroParagraph = styled.div`
  display: flex;
`;

export const ParagraphColumn = styled.div`
  color: ${colors.black};
  width: 35vw;
  margin-right: 62px;
  padding-bottom: 114px;
  font-weight: 300;

  font-size: ${fonts.BodySize};
`;

export const AboutContainer = styled.div`
  background-color: ${colors.white};
`;

export const AboutPrinciples = styled.div`
margin-bottom: 314px;
`;

export const PrinciplesHeader = styled.div`
  font-size: ${fonts.Heading2Size};
  text-align: center;
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
  
  `

export const HeroHeadline = styled.span`
  ${({ black }) =>
    black ? `color: ${colors.black};` : `color: ${colors.white}`}
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

`
