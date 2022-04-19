import * as React from "react";
import { graphql } from "gatsby";
import "../styles/fonts.scss";
import Layout from "../components/Layout";
import {
  PartnersHeader,
  PartnersHeaderDescription,
  PartnersHeaderText,
  SponsorsDescription,
  SponsorSection,
  SponsorsHeadline,
  SponsorImage,
  SponsorCarousel,
  PartnersCTA,
  CTAHeader,
  CTALink,
  CTAAlign,
  TickerImages,
} from "../styles/Partners.styles";
import Ticker from "react-ticker";
import { Carousel } from "@trendyol-js/react-carousel";

const PartnersPage = ({ data }) => {
  const partnersQuery = data.prismicPartnersPage.data;

  return (
    <Layout>
      <PartnersHeader>
        <PartnersHeaderText>
          {partnersQuery.partners_headline}
        </PartnersHeaderText>
        <PartnersHeaderDescription>
          {partnersQuery.partners_description.text}
        </PartnersHeaderDescription>
      </PartnersHeader>

      <SponsorSection>
        <SponsorsHeadline> {partnersQuery.sponsors_headline}</SponsorsHeadline>
        <SponsorsDescription>
          {partnersQuery.sponsors_description}
        </SponsorsDescription>
        <SponsorCarousel>
          <Ticker speed={10} offset={0}>
            {({ index }) => (
              <TickerImages>
                {partnersQuery.our_sponsors.map((image, idx) => (
                  <>
                    <SponsorImage key={idx} src={image.sponsor_image.url} />
                    {index}
                  </>
                ))}
              </TickerImages>
            )}
          </Ticker>
        </SponsorCarousel>

        <SponsorsHeadline>
          {" "}
          {partnersQuery.past_sponsors_headline}
        </SponsorsHeadline>
        <SponsorsDescription>
          {partnersQuery.past_sponsors_description}
        </SponsorsDescription>
        <SponsorCarousel>
          <Ticker speed={10} offset={0}>
            {({ index }) => (
              <TickerImages>
                {" "}
                {partnersQuery.past_sponsors.map((image, idx) => (
                  <>
                    <SponsorImage
                      key={idx}
                      alt={image.past_sponsors_image.alt}
                      src={image.past_sponsors_image.url}
                    />
                    {index}
                  </>
                ))}
              </TickerImages>
            )}
          </Ticker>{" "}
        </SponsorCarousel>
        <SponsorsHeadline> {partnersQuery.allies_headline}</SponsorsHeadline>
        <SponsorsDescription>
          {partnersQuery.allies_description}
        </SponsorsDescription>
        <SponsorCarousel>
          <Ticker speed={10} offset={0}>
            {({ index }) => (
              <TickerImages>
                {" "}
                {partnersQuery.allies_images.map((image, idx) => (
                  <>
                    <SponsorImage
                      key={idx}
                      alt={image.allies_image.alt}
                      src={image.allies_image.url}
                    />
                    {index}
                  </>
                ))}
              </TickerImages>
            )}
          </Ticker>{" "}
        </SponsorCarousel>

        <SponsorsHeadline> {partnersQuery.resource_partners}</SponsorsHeadline>
        <SponsorsDescription>
          {partnersQuery.resource_partners_description}
        </SponsorsDescription>
        <SponsorCarousel>
          <Ticker speed={10} offset={0}>
            {({ index }) => (
              <TickerImages>
                {" "}
                {partnersQuery.resource_images.map((image, idx) => (
                  <>
                    <SponsorImage
                      key={idx}
                      alt={image.resource_image.alt}
                      src={image.resource_image.url}
                    />
                    {index}
                  </>
                ))}
              </TickerImages>
            )}
          </Ticker>{" "}
        </SponsorCarousel>

        <SponsorsHeadline> {partnersQuery.mentor_header}</SponsorsHeadline>
        <SponsorsDescription>
          {partnersQuery.mentor_description}
        </SponsorsDescription>
        <SponsorCarousel>
          <Ticker speed={10} offset={0}>
            {({ index }) => (
              <TickerImages>
                {" "}
                {partnersQuery.mentor_images.map((image, idx) => (
                  <>
                    <SponsorImage
                      key={idx}
                      alt={image.mentor_image.alt}
                      src={image.mentor_image.url}
                    />
                    {index}
                  </>
                ))}
              </TickerImages>
            )}
          </Ticker>{" "}
        </SponsorCarousel>
      </SponsorSection>

      <PartnersCTA>
        <div>
          <CTAHeader> {partnersQuery.partners_cta_header}</CTAHeader>

          <CTAAlign>
            <CTALink href={`/${partnersQuery.cta_destination}`}>
              {partnersQuery.cta_text}
            </CTALink>
          </CTAAlign>
        </div>
      </PartnersCTA>
    </Layout>
  );
};

export const partners = graphql`
  query PartnersQuery {
    prismicPartnersPage {
      data {
        partners_headline
        partners_description {
          text
        }
        sponsors_headline
        sponsors_description

        our_sponsors {
          sponsor_image {
            url
            alt
          }
        }

        past_sponsors_description
        past_sponsors_headline
        past_sponsors {
          past_sponsors_image {
            url
            alt
          }
        }

        allies_description
        allies_headline
        allies_images {
          allies_image {
            alt
            url
          }
        }

        resource_partners
        resource_partners_description
        resource_images {
          resource_image {
            alt
            url
          }
        }

        mentor_description
        mentor_header
        mentor_images {
          mentor_image {
            alt
            url
          }
        }

        cta_text
        cta_destination
        partners_cta_header
      }
    }
  }
`;

export default PartnersPage;
