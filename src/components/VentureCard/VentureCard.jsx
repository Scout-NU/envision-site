import React from "react";
import {
  VentureContainer,
  VentureImage,
  VentureHeader,
  VentureText,
  VentureDescription,
  VentureItems,
  Item,
  VentureName,
} from "./VentureCard.styles";

export default function VentureCard(venture) {
  return (
    <VentureContainer>
      <VentureImage>
        <img alt="" src={venture.venture.venture_image.url} />
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
