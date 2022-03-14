import React from "react";
import styled from "styled-components";
import Header from "../components/Header.jsx";
import Footer from "./Footer.jsx";
import "../styles/fonts.scss";
const LayoutContainer = styled.div``;

export default function Layout({ children }) {
  return (
    <LayoutContainer>
      <Header />

      {children}

      <Footer />
    </LayoutContainer>
  );
}
