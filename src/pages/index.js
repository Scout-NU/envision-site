import * as React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import "../styles/fonts.scss";
import colors from "../styles/colors";
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

const Box = styled.div`
  width: 500px;
  height: 500px;

  background-color: red;

  border: solid;
`;

const CarouselSection = styled.div`
  width: 100vw;
  padding-top: 68px;
  padding-bottom: 68px;
  background-color: ${colors.black};
  display: flex;
  justify-content: center;
  align-content: center;

  button {
    dispay: none;
  }

  .styles-module_carousel-arrow__26sRw {
    display: none;
  }

  .carousel {
    width: 70vw;
  }
`;

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
      <CarouselSection>
        <Carousel className="carousel" show={1.08} slide={1} swiping={true}>
          <VentureCard venture={homepageQuery.venture[0]} />
          <VentureCard venture={homepageQuery.venture[1]} />
          <VentureCard venture={homepageQuery.venture[2]} />
          <VentureCard venture={homepageQuery.venture[3]} />
        </Carousel>
      </CarouselSection>
    </Layout>
  );
};

export const homepage = graphql`
  query HomeQuery {
    prismicHomepage {
      data {
        venture {
          money_raised
          venture_description {
            text
          }
          venture_image {
            url
          }
          venture_title
          venture_name
        }
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
