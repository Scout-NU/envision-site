import * as React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import "../styles/fonts.scss";
import Layout from "../components/Layout";
import ENVISION from "../images/svg/ENVISION.svg";
import HeroImage from "../images/herogradient.png";

const HeroContainer = styled.div`
background: url(${HeroImage}) no-repeat center top;
background-size: cover;


`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;

  padding-top: 233px;
  margin-left: 6vw;
  padding-bottom: 256px;
  svg {
  }
`;

const HeroDescription = styled.div`
  font-family: "Space Mono", monospace;
  font-size: 27px;
  width: 34vw;
  margin-top: 39px;
`;

const IndexPage = ({ data }) => {
  const homepageQuery = data.prismicHomepage.data;
  return (
    <Layout>
      <HeroContainer>
        {/* <img src={HeroImage} /> */}

        <HeroContent>
          <ENVISION />
          <HeroDescription>
            We’re the first equity-free accelerator for young, underrepresented
            founders.
          </HeroDescription>
        </HeroContent>
      </HeroContainer>
    </Layout>
  );
};

export const homepage = graphql`
  query HomeQuery {
    prismicHomepage {
      data {
        test_title
      }
    }
  }
`;

export default IndexPage;
