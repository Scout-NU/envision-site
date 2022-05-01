import styled from "styled-components";
import colors from "../../styles/colors";
import fonts from "../../styles/font_names";

export const VentureContainer = styled.div`
  margin-top: 68px;
  margin-bottom: 68px;
  background-color: ${colors.black};
  display: flex;
  align-items: center;
`;

export const VentureImage = styled.div`
  img {
    width: 26.8vw;
  }
`;

export const VentureHeader = styled.div`
  color: ${colors.white};
  font-size: ${fonts.ventureTitle};
  font-family: ${fonts.itc_avante_garde}, sans-serif;
`;

export const VentureText = styled.div`
  margin-left: 64px;
`;

export const VentureDescription = styled.div`
  color: ${colors.white};
  font-size: ${fonts.BodySize};
  font-family: ${fonts.itc_avante_garde}, sans-serif;
  margin-top: 44px;
  // width: 35vw;
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
