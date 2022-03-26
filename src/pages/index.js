import * as React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import "../styles/fonts.scss";
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
height: 500px;
width: 70vw;

.carousel {
  width: 70vw;

}

`





const IndexPage = ({ data }) => {
  const homepageQuery = data.prismicHomepage.data;
  return (
    <Layout>

      <CarouselSection>
      <Carousel className="carousel" show={1.5} slide={1} swiping={true}>
        {console.log(homepageQuery.venture)}
        <VentureCard venture={homepageQuery.venture[0]} />
        <VentureCard venture={homepageQuery.venture[1]} />
        <VentureCard venture={homepageQuery.venture[2]} />
        <VentureCard venture={homepageQuery.venture[3]} />

      </Carousel>
      </CarouselSection>

      {homepageQuery.venture.map((venture) => {
        <div>
          <h1>testsetestset</h1>
        </div>
        {console.log(venture)}
      // <VentureCard venture={venture.venture} />;

      })}


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
