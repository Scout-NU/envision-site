import * as React from "react";
import { useState } from "react";
import { graphql } from "gatsby";
import "../styles/fonts.scss";
import Layout from "../components/Layout";
import {
  CohortDate,
  CohortHeader,
  CohortSection,
  CohortHeaderText,
  CohortList,
  PortfolioContainer,
  PortfolioCTA,
  PortfolioCTAWrapper,
  PortfolioDescription,
  PortfolioHeader,
  CohortButtonHeader,
  CohortButton,
  CohortButtonDate,
  CohortImages,
  MemberImage,
  MemberContainer,
  MemberText,
  MemberName,
  MemberCompany,
  MemberDescription,
  PortfolioBackground,
} from "../styles/Portfolio.styles";

const Portfolio = ({ data }) => {
  const portfolio = data.prismicPortfolio.data;

  const [cohort, setCohort] = useState(0);

  return (
    <Layout>
      <PortfolioBackground>
        <PortfolioContainer>
          <PortfolioHeader>{portfolio.portfolio_header}</PortfolioHeader>

          <PortfolioDescription>
            {portfolio.portfolio_description.text}
          </PortfolioDescription>
          <PortfolioCTAWrapper>
            <PortfolioCTA href={`/${portfolio.portfolio_destination}`}>
              {portfolio.portfolio_cta}
            </PortfolioCTA>
          </PortfolioCTAWrapper>

          <CohortSection>
            <div>
              <CohortHeader>
                <CohortHeaderText>
                  {portfolio.cohorts[cohort].cohort.document.data.cohort_title}
                </CohortHeaderText>
                <CohortDate>
                  {portfolio.cohorts[cohort].cohort.document.data.cohort_date}
                </CohortDate>
              </CohortHeader>

              <CohortImages>
                {portfolio.cohorts[
                  cohort
                ].cohort.document.data.cohort_members.map((member, id) => (
                  <MemberContainer key={id}>
                    <MemberImage
                      alt={member.image.alt}
                      src={member.image.url}
                    />
                    <MemberText>
                      <MemberName>{member.name}</MemberName>
                      <MemberCompany>{member.company_title}</MemberCompany>
                      <MemberDescription>
                        {member.description}
                      </MemberDescription>
                    </MemberText>
                  </MemberContainer>
                ))}
              </CohortImages>

              <CohortList>
                {portfolio.cohorts.map((cohort, idx) => (
                  <CohortButton onClick={() => setCohort(idx)} key={idx}>
                    <CohortButtonHeader onClick={() => setCohort(idx)}>
                      {cohort.cohort.document.data.cohort_title}
                    </CohortButtonHeader>
                    <CohortButtonDate>
                      {cohort.cohort.document.data.cohort_date}
                    </CohortButtonDate>
                  </CohortButton>
                ))}
              </CohortList>
            </div>
          </CohortSection>
        </PortfolioContainer>
      </PortfolioBackground>
    </Layout>
  );
};

export const portfolio = graphql`
  query PortfolioQuery {
    prismicPortfolio {
      data {
        cohorts {
          cohort {
            document {
              ... on PrismicCohort {
                id
                data {
                  cohort_date
                  cohort_title
                  cohort_members {
                    name
                    company_title
                    description
                    image {
                      alt
                      url
                    }
                  }
                }
              }
            }
          }
        }
        portfolio_cta
        portfolio_description {
          text
        }
        portfolio_destination
        portfolio_header
      }
    }
  }
`;

export default Portfolio;
