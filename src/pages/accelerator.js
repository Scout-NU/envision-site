import * as React from "react";
import { useState, useEffect, useWindowWidth } from "react";
import { graphql } from "gatsby";
import "../styles/fonts.scss";
import Layout from "../components/Layout";
import {
  AcceleratorHeader,
  InfoSection,
  InfoItem,
  InfoIcon,
  InfoText,
  InfoHeader,
  InfoDescription,
  TickerSection,
  MainTicker,
  ResourceLink,
  CTAHeader,
  CTAAlign,
  CTALink,
  AcceleratorCTA,
  AcceleratorBackground,
} from "../styles/Accelerator.styles";
import Ticker from "react-ticker";
import Training from "../svg/training.svg";
import ResourceArrow from "../images/resourcelink.png";
import useWindowSize from "../components/useGatsbyWindowSize";

const Accelerator = ({ data }) => {
  const acceleratorQuery = data.prismicAccelerator.data;
  const windowSize = useWindowSize();

  return (
    <Layout>
      <AcceleratorBackground>
        <AcceleratorHeader>
          {acceleratorQuery.accelerator_header}
        </AcceleratorHeader>

        <InfoSection>
          {acceleratorQuery.accelerator_info.map((item, idx) => (
            <InfoItem>
              <InfoIcon
                alt={item.icon.alt}
                src={
                  windowSize.width > 768 ? item.icon.url : item.mobile_icon.url
                }
              />

              <InfoText>
                <InfoHeader>{item.info_header}</InfoHeader>
                <InfoDescription>{item.info_description}</InfoDescription>
              </InfoText>
            </InfoItem>
          ))}
        </InfoSection>
      </AcceleratorBackground>

      <TickerSection>
        <Ticker speed={10} offset={0}>
          {({ index }) => (
            <>
              <MainTicker
                href={`/${acceleratorQuery.resource_library_link_destination}`}
              >
                <ResourceLink href="/">
                  {acceleratorQuery.resource_library_link}{" "}
                  <img
                    alt="Ticker Resource Link Arrow Icon"
                    src={ResourceArrow}
                  />
                </ResourceLink>
                {acceleratorQuery.resource_library_text}
              </MainTicker>
              {index}
            </>
          )}
        </Ticker>
      </TickerSection>

      <AcceleratorCTA>
        <div>
          <CTAHeader> {acceleratorQuery.cta_header_text}</CTAHeader>

          <CTAAlign>
            <CTALink href={`/${acceleratorQuery.button_destination}`}>
              {acceleratorQuery.button_text}
            </CTALink>
          </CTAAlign>
        </div>
      </AcceleratorCTA>
    </Layout>
  );
};

export const accelerator = graphql`
  query AcceleratorQuery {
    prismicAccelerator {
      data {
        accelerator_header
        accelerator_info {
          icon {
            alt
            url
          }
          mobile_icon {
            url
            alt
          }
          info_description
          info_header
        }
        resource_library_text
        resource_library_link_destination
        resource_library_link
        cta_header_text
        button_text
        button_destination
      }
    }
  }
`;

export default Accelerator;
