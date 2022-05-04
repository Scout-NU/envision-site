import React from "react";
import styled from "styled-components";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "../styles/fonts.scss";
const LayoutContainer = styled.div``;

export default function Layout({ children, headerMode }) {
  return (
    <LayoutContainer>
      <Header headerMode={headerMode} />

      {children}

      <Footer />
    </LayoutContainer>
  );
}
