import styled from "styled-components";
import colors from "./colors";
import fonts from "./font_names";

export const AboutHero = styled.div`
  margin-left: 14vw;
  padding-top: 115px;
  font-family: ${fonts.itc_avante_garde};
  background-color: ${colors.black};
`;

export const AboutHeroText = styled.div`
  font-size: ${fonts.Heading2Size};
  color: ${colors.white};
  font-weight: 700;
  margin-bottom: 62px;

  .orange {
    color: ${colors.orange};
  }
`;

export const AboutHeroParagraph = styled.div`
  display: flex;
`;

export const ParagraphColumn = styled.div`
  color: ${colors.white};
  width: 35vw;
  margin-right: 62px;
  padding-bottom: 114px;
  font-weight: 300;
  font-size: ${fonts.BodySize};
`;

export const AboutContainer = styled.div`
  background-color: ${colors.black};
`;
