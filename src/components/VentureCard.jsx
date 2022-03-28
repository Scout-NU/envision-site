import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";

const VentureContainer = styled.div`
  width: 66vw;
  margin-top: 68px;
  margin-bottom: 68px;
  background-color: ${colors.black};
  display: flex;
  align-items: center;
`;

const VentureImage = styled.div`
  img {
    width: 26.8vw;
  }
`;

const VentureHeader = styled.div`
  color: ${colors.white};
  font-size: 60px;
  font-family: itc-avant-garde-gothic-pro, sans-serif;
`;

const VentureText = styled.div`
  margin-left: 64px;
`;

const VentureDescription = styled.div`
  color: ${colors.white};
  font-size: 18px;
  font-family: itc-avant-garde-gothic-pro, sans-serif;
  margin-top: 44px;
  width: 22vw;
`;

export default function VentureCard(venture) {
  return (
    <VentureContainer>
      <VentureImage>
        <img src={venture.venture.venture_image.url} />
      </VentureImage>
      <VentureText>
        <VentureHeader>{venture.venture.venture_title}</VentureHeader>
        <VentureDescription>
          {venture.venture.venture_description.text}
        </VentureDescription>
      </VentureText>
    </VentureContainer>
  );
}
