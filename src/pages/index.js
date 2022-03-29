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
  HeroContainer,
  HeroContent,
  HeroDescription,
  MissionSection,
  MissionDescription,
  MissionTitle,
  MissionCTA,
  CTASection,
} from "../styles/Homepage.styles";

const IndexPage = ({ data }) => {
  const homepageQuery = data.prismicHomepage.data;
  return (
    <Layout>
      <HeroContainer>
        <HeroContent>
          <img alt="Envision" src={Envision} />
          <HeroDescription>
            {homepageQuery.hero_description.text}
          </HeroDescription>
        </HeroContent>

        <MissionSection>
          <MissionTitle>{homepageQuery.mission_title}</MissionTitle>
          <MissionDescription>
            {homepageQuery.mission_description.text} <br />
            <CTASection>
              <MissionCTA href={`/${homepageQuery.mission_cta_destination}`}>
                {homepageQuery.mission_cta_text}
              </MissionCTA>
            </CTASection>
          </MissionDescription>
        </MissionSection>
      </HeroContainer>
    </Layout>
  );
};

export const homepage = graphql`
  query HomeQuery {
    prismicHomepage {
      data {
        hero_description {
          text
        }
        mission_title
        mission_description {
          text
        }
        mission_cta_text
        mission_cta_destination
      }
    }
  }
`;

export default IndexPage;
