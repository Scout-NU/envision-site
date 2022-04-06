import * as React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import "../styles/fonts.scss";
import Layout from "../components/Layout";

import {
  AboutContainer,
  AboutHero,
  AboutHeroParagraph,
  AboutHeroText,
  AboutPrinciples,
  GuidingPrinciple,
  GuidingPrincipleHeader,
  GuidingPrinciples,
  GuidingDescription,
  ParagraphColumn,
  PrinciplesHeader,
  PrinciplesSubHeader,
  GuidingPrincipleImg,
  GuidingPrincipleText,
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
        <AboutPrinciples>
          <PrinciplesHeader>
            {aboutQuery.guiding_principles_header}
          </PrinciplesHeader>
          <PrinciplesSubHeader>
            {aboutQuery.guiding_principles_sub_header}
          </PrinciplesSubHeader>
          <GuidingPrinciples>
            <div>
              {aboutQuery.principles.map((principle, id) => (
                <GuidingPrinciple key={id}>
                  <GuidingPrincipleImg src={principle.principle_image.url} />
                  <GuidingPrincipleText>
                    <GuidingPrincipleHeader>
                      {principle.principle_header}
                    </GuidingPrincipleHeader>
                    <GuidingDescription>
                      {principle.principle_description.text}
                    </GuidingDescription>
                  </GuidingPrincipleText>
                </GuidingPrinciple>
              ))}
            </div>
          </GuidingPrinciples>
        </AboutPrinciples>
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
        guiding_principles_header
        guiding_principles_sub_header
        principles {
          principle_description {
            text
            richText
          }
          principle_header
          principle_image {
            alt
            url
          }
        }
      }
    }
  }
`;

export default AboutPage;
