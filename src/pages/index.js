import * as React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import "../styles/fonts.scss";
import colors from "../styles/colors"
import Layout from "../components/Layout";
import { Carousel } from "@trendyol-js/react-carousel";
import VentureCard from "../components/VentureCard";

const MainContainer = styled.div``;

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

.carousel {
  width: 70vw;

}

`





const IndexPage = ({ data }) => {
  const homepageQuery = data.prismicHomepage.data;
  return (
    <Layout>

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
        }
      }
    }
  }
`;


export default IndexPage;
