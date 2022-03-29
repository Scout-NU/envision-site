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

const VentureItems = styled.div`
  display: flex;
  margin-top: 48px;
`;

const Item = styled.div`
  width: 80px;
  height: 80px;
  margin-right: 25px;
  background-color: #e5e5e5;
`;

const VentureName = styled.div`
color: ${colors.white};
font-size: 34px;
font-family: itc-avant-garde-gothic-pro, sans-serif;

`

export default function VentureCard(venture) {
  return (
    <VentureContainer>
      <VentureImage>
        <img src={venture.venture.venture_image.url} />
      </VentureImage>
      <VentureText>
        <VentureHeader>{venture.venture.venture_title}</VentureHeader>
        <VentureName>{venture.venture.venture_name}</VentureName>

        <VentureDescription>
          {venture.venture.venture_description.text}
        </VentureDescription>
        <VentureItems>
          <Item />
          <Item />
          <Item />
          <Item />
        </VentureItems>
      </VentureText>
    </VentureContainer>
  );
}
