import styled from "styled-components";
import colors from "../../styles/colors";
import fonts from "../../styles/font_names";
import dimensions from "../../styles/dimensions";

export const VentureContainer = styled.div`
  margin-top: 68px;
  margin-bottom: 68px;
  background-color: ${colors.black};
  align-items: center;
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
  }
`;

export const VentureImage = styled.div`
  img {
    width: 26.8vw;
  }
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    img {
      width: 100vw;
    }
  }
`;

export const VentureHeader = styled.div`
  color: ${colors.white};
  font-size: ${fonts.ventureTitle};
  font-family: ${fonts.itc_avante_garde}, sans-serif;
`;

export const VentureText = styled.div`
  margin-left: 64px;
  width: 505px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-left: 0px;
    width; 100vw;
  }
`;

export const VentureDescription = styled.div`
  color: ${colors.white};
  font-size: ${fonts.BodySize};
  font-family: ${fonts.itc_avante_garde}, sans-serif;
  margin-top: 44px;
`;

export const VentureItems = styled.div`
  display: flex;
  margin-top: 48px;
`;

export const Item = styled.div`
  width: 80px;
  height: 80px;
  margin-right: 25px;
  background-color: #e5e5e5;
`;

export const VentureName = styled.div`
  color: ${colors.white};
  font-size: ${fonts.SpaceHeading2};
  font-family: itc-avant-garde-gothic-pro, sans-serif;
`;
