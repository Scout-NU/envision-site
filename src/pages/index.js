import * as React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import "../styles/fonts.scss";
import Layout from "../components/Layout";
import colors from "../styles/colors";

const MissionSection = styled.div`
  background-color: ${colors.black};
  padding-top: 133px;
  padding-bottom: 153px;
`;

const MissionHeader = styled.div`
  color: ${colors.pink};
`;

const MissionText = styled.div`
  width: 30vw;
  margin-left: 22vw;
`;

const MainContainer = styled.div``;

const MissionDescription = styled.div`
  color: ${colors.white};
`;

const IndexPage = ({ data }) => {
  const homepageQuery = data.prismicHomepage.data;
  return (
    <Layout>
      <MissionSection>
        <MissionText>
          <MissionHeader>
            <h1>{homepageQuery.mission_title}</h1>
          </MissionHeader>

          <MissionDescription>
            <p> {homepageQuery.mission_description.text}</p>
          </MissionDescription>
        </MissionText>
      </MissionSection>
    </Layout>
  );
};

export const homepage = graphql`
  query HomeQuery {
    prismicHomepage {
      data {
        mission_title
        mission_description {
          text
        }
      }
    }
  }
`;

export default IndexPage;
