import * as React from "react";
import { graphql } from "gatsby";
import "../styles/fonts.scss";
import Layout from "../components/Layout";
import Envision from "../images/ENVISION.png";
import MobileImage from "../images/mobileimage.png";
import VentureCard from "../components/VentureCard/VentureCard";
import { Carousel } from "@trendyol-js/react-carousel";
import BackArrow from "../images/BackArrow.png";
import ForwardArrow from "../images/forwardarrow.png";

import {
  HeroContainer,
  HeroContent,
  HeroDescription,
  MissionSection,
  MissionDescription,
  MissionTitle,
  MissionCTA,
  CTASection,
  CarouselSection,
  ByTheNumbers,
  ByTheNumbersHeader,
  Numbers,
  Number,
  NumberText,
  NumberDescription,
  HomeCTAs,
  HomeCTA,
  SmallLogo,
  DownIcon,
  NumberContent,
  WallOfLoveSection,
  WallOfLoveHeader,
  WallofLoveDescription,
  WallofLoveTestimonials,
  WallTestimonial,
  HeroMission,
  ArrowImage
} from "../styles/Homepage.styles";
import DownArrow from "../images/downarrow.png";

const Arrow1=()=> {
  return <ArrowImage src={BackArrow} />
}

const Arrow2=()=> {
  return <ArrowImage src={ForwardArrow} />
}

const IndexPage = ({ data }) => {
  const homepageQuery = data.prismicHomepage.data;
  return (
    <Layout>
      <HeroMission>
      <HeroContainer>
        <HeroContent>
          <div>
            <img alt="Envision" src={Envision} />
            <SmallLogo alt="Envision" src={MobileImage} />

            <HeroDescription>
              {homepageQuery.hero_description.text}
            </HeroDescription>

            <DownIcon>
              <img src={DownArrow} />
            </DownIcon>
          </div>
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
      </HeroMission>
      <ByTheNumbers>
        <ByTheNumbersHeader>{homepageQuery.numbers_header}</ByTheNumbersHeader>

        <Numbers>
          {homepageQuery.numbers.map((object, i) => (
            <Number key={i}>
              <NumberContent>
                <NumberText>
                  {object.number.split(" ").length > 1 ? (
                    <div>
                      {object.number.split(" ")[0]}{" "}
                      <span>{object.number.split(" ")[1]}</span>
                    </div>
                  ) : (
                    object.number.split(" ")[0]
                  )}
                </NumberText>
                <NumberDescription>
                  {object.number_description}
                </NumberDescription>
              </NumberContent>
            </Number>
          ))}
        </Numbers>
      </ByTheNumbers>
      <CarouselSection>
        <Carousel className="carousel" leftArrow={<Arrow1 />} rightArrow={<Arrow2 />} show={1} slide={1} swiping={true}>
          {homepageQuery.venture.map((object, i) => (
            <VentureCard venture={object} key={i} />
          ))}
        </Carousel>
      </CarouselSection>

      <WallOfLoveSection>
        <WallOfLoveHeader>{homepageQuery.wall_of_love_header}</WallOfLoveHeader>

        <WallofLoveDescription>
          {homepageQuery.wall_of_love_description}
        </WallofLoveDescription>

        <WallofLoveTestimonials>
          {homepageQuery.testimonials.map((testimonial, idx) => (
            <WallTestimonial
              dangerouslySetInnerHTML={{ __html: testimonial.testimonial.html }}
            />
          ))}
        </WallofLoveTestimonials>
        <HomeCTAs>
        <HomeCTA href="/">BECOME A MENTOR</HomeCTA>
        <HomeCTA href="/">PARTNER WITH US</HomeCTA>
      </HomeCTAs>
      </WallOfLoveSection>


    </Layout>
  );
};

export const homepage = graphql`
  query HomeQuery {
    prismicHomepage {
      data {
        venture {
          venture_description {
            text
          }
          venture_image {
            url
          }
          venture_logo {
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

        numbers_header
        numbers {
          number
          number_description
        }

        supporter_images {
          image {
            url
            alt
          }
        }

        wall_of_love_description
        wall_of_love_header
        testimonials {
          testimonial {
            richText
            html
          }
        }
      }
    }
  }
`;

export default IndexPage;
