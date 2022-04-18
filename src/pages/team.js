import * as React from "react";
import { graphql } from "gatsby";
import "../styles/fonts.scss";
import Layout from "../components/Layout";
import {
  MemberName,
  MemberSub,
  MemberText,
  TeamHeader,
  TeamImage,
  TeamMember,
  TeamMembers,
} from "../styles/Team.styles";

export default function Team({ data }) {
  const teamQuery = data.prismicTeamPage.data;

  return (
    <Layout>
      <TeamHeader>{teamQuery.team_header}</TeamHeader>

      <TeamMembers>
        {teamQuery.team_members.map((member, idx) => (
          <TeamMember key={idx}>
            <TeamImage alt={member.alt} src={member.team_image.url} />
            <MemberText>
              <MemberName>{member.team_name}</MemberName>
              <MemberSub>
                {member.pronouns}, {member.role}
              </MemberSub>
            </MemberText>
          </TeamMember>
        ))}
      </TeamMembers>
    </Layout>
  );
}

export const teamData = graphql`
  query TeamQuery {
    prismicTeamPage {
      data {
        team_header
        team_members {
          pronouns
          role
          team_image {
            alt
            url
          }
          team_name
        }
      }
    }
  }
`;
