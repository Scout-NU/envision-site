import * as React from "react";
import { graphql } from "gatsby";
import "../styles/fonts.scss";
import Layout from "../components/Layout";
import Envision from "../images/ENVISION.png";
import MobileImage from "../images/mobileimage.png";
import VentureCard from "../components/VentureCard/VentureCard";
import { Carousel } from "@trendyol-js/react-carousel";
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
} from "../styles/Homepage.styles";
import DownArrow from "../images/downarrow.png";

const IndexPage = ({ data }) => {
  const homepageQuery = data.prismicHomepage.data;
  return (
    <Layout>
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
      <CarouselSection>
        <Carousel className="carousel" show={1.2} slide={1} swiping={true}>
          {homepageQuery.venture.map((object, i) => (
            <VentureCard venture={object} key={i} />
          ))}
        </Carousel>
      </CarouselSection>

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

      <HomeCTAs>
        <HomeCTA href="/">BECOME A MENTOR</HomeCTA>
        <HomeCTA href="/">PARTNER WITH US</HomeCTA>
      </HomeCTAs>
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
      }
    }
  }
`;

export default IndexPage;
