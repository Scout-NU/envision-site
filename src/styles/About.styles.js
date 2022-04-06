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

export const AboutContainer = styled.div``;

export const HeroHeadline = styled.span`
  ${({ black }) =>
    black ? `color: ${colors.black};` : `color: ${colors.white}`}
`;
