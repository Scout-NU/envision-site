import * as React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import "../styles/fonts.scss";
import Layout from "../components/Layout";

const MainContainer = styled.div``;

const IndexPage = ({ data }) => {
  // const homepageQuery = data.prismicHomepage.data;
  return (
    <Layout>
    </Layout>
  );
};

// export const homepage = graphql`
//   query HomeQuery {
//     prismicHomepage {
//       data {
//       }
//     }
//   }
// `;

export default IndexPage;
