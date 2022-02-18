import * as React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

const MainContainer = styled.div``;

const IndexPage = ({ data }) => {
  const homepageQuery = data.prismicHomepage.data;
  return (
    <MainContainer>
      <h1>{homepageQuery.test_title}</h1>
    </MainContainer>
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
