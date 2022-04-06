import * as React from "react";
import { graphql } from "gatsby";
import "../styles/fonts.scss";
import Layout from "../components/Layout";
import {
  AboutContainer,
  AboutHero,
  AboutHeroParagraph,
  AboutHeroText,
  HeroHeadline,
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
              <HeroHeadline key={id} black={id === 2}>
                {word}{" "}
              </HeroHeadline>
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
