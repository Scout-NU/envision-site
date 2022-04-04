import * as React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import "../styles/fonts.scss";
import Layout from "../components/Layout";
import ENVISION from "../images/svg/ENVISION.svg";
import HeroImage from "../images/herogradient.png";
import Envision from "../images/ENVISION.png";
import colors from "../styles/colors";
import fonts from "../styles/font_names";
import {
  AboutContainer,
  AboutHero,
  AboutHeroParagraph,
  AboutHeroText,
  ParagraphColumn,
} from "../styles/About.styles";

const AboutPage = ({ data }) => {
  const aboutQuery = data.prismicAbout.data;

  return (
    <Layout>
      <AboutContainer>
        <AboutHero>
          <AboutHeroText>
            {aboutQuery.about_header.split(" ").map((word, id) => (
              <span key={id} className={id == 2 && "orange"}>
                {word}{" "}
              </span>
            ))}
          </AboutHeroText>

          <AboutHeroParagraph>
            {aboutQuery.about_description.richText.map((paragraph, id) => (
              <ParagraphColumn key={id}>{paragraph.text}</ParagraphColumn>
            ))}
          </AboutHeroParagraph>
        </AboutHero>
      </AboutContainer>
    </Layout>
  );
};

export const about = graphql`
  query AboutQuery {
    prismicAbout {
      data {
        about_header
        about_description {
          richText
        }
      }
    }
  }
`;

export default AboutPage;
