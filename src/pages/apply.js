import * as React from "react";
import { graphql } from "gatsby";
import "../styles/fonts.scss";
import Question from "../components/Question";
import Layout from "../components/Layout";
import {
  ApplyCTA,
  ApplyHeader,
  CharacteristicItem,
  Characteristics,
  CharacteristicsHeader,
  CharacteristicsItem,
  FAQs,
  HeaderText,
  ListItem,
  Testimonial,
  TestimonialImage,
  TestimonialText,
  FAQHeader,
} from "../styles/Apply.styles";

const Apply = ({ data }) => {
  const applyQuery = data.prismicApply.data;

  return (
    <Layout>
      <ApplyHeader>
        <HeaderText>{applyQuery.apply_header}</HeaderText>
        <Testimonial>
          <TestimonialImage
            alt={applyQuery.testimonial_image.alt}
            src={applyQuery.testimonial_image.url}
          />
          <TestimonialText>{applyQuery.testimonial_text}</TestimonialText>
        </Testimonial>
      </ApplyHeader>

      <Characteristics>
        <CharacteristicsHeader>
          {applyQuery.apply_text_header}
        </CharacteristicsHeader>

        <CharacteristicsItem>
          {applyQuery.characteristics.map((item, idx) => (
            <CharacteristicItem key={idx}>
              {item.characteristic.richText.map((li, idx) => (
                <ListItem key={idx}>{li.text}</ListItem>
              ))}
            </CharacteristicItem>
          ))}
        </CharacteristicsItem>

        <ApplyCTA>
          <a href={`/${applyQuery.cta_destination}`}>{applyQuery.apply_cta}</a>
        </ApplyCTA>
      </Characteristics>
      <FAQHeader>FREQUENTLY ASKED QUESTIONS</FAQHeader>

      <FAQs>
        {applyQuery.faqs.map((question, idx) => (
          <Question key={idx} question={question} />
        ))}
      </FAQs>
    </Layout>
  );
};

export const apply = graphql`
  query ApplyQuery {
    prismicApply {
      data {
        apply_cta
        apply_header
        apply_text_header
        cta_destination
        testimonial_image {
          alt
          url
        }
        testimonial_text
        characteristics {
          characteristic {
            richText
          }
        }

        faqs {
          question
          answer
        }
      }
    }
  }
`;

export default Apply;
