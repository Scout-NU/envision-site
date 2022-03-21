import React from "react";
import styled from "styled-components";

const VentureContainer = styled.div`
  width: 70vw;
  height: 546px;
  background-color: red;
`;

const VentureImage = styled.div``;

const VentureText = styled.div``;

export default function VentureCard(venture) {
  return (
    <VentureContainer>
      <VentureImage>
        {/* <img src={venture.venture_image.url} /> */}
      </VentureImage>
        <h1>Venture here</h1>
      <VentureText>{venture.venture.venture_title}</VentureText>
    </VentureContainer>
  );
}
