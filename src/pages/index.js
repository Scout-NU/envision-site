import * as React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import "../styles/fonts.scss";
import Layout from "../components/Layout";

const MainContainer = styled.div``;

const IndexPage = ({ data }) => {
  return <Layout></Layout>;
};

export default IndexPage;
