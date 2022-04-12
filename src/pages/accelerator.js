import * as React from "react";
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
} from "../styles/Accelerator.styles";

const Accelerator = ({ data }) => {
  const acceleratorQuery = data.prismicAccelerator.data;

  return (
    <Layout>
      <AcceleratorHeader>
        {acceleratorQuery.accelerator_header}
      </AcceleratorHeader>

      <InfoSection>
        {acceleratorQuery.accelerator_info.map((item, idx) => (
          <InfoItem>
            <InfoIcon src={item.icon.url} />
            <InfoText>
              <InfoHeader>{item.info_header}</InfoHeader>
              <InfoDescription>{item.info_description}</InfoDescription>
            </InfoText>
          </InfoItem>
        ))}
      </InfoSection>
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
          info_description
          info_header
        }
      }
    }
  }
`;

export default Accelerator;
