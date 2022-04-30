import styled from "styled-components";
import colors from "./colors";
import fonts from "./font_names";
import dimensions from "../styles/dimensions";
import Accelerator from "../images/gradientsFINAL-accelerator.png";

export const AcceleratorHeader = styled.div`
  font-family: ${fonts.itc_avante_garde};
  font-size: ${fonts.Heading2Size};
  color: ${colors.black};
  font-weight: 700;
  width: 32vw;
  padding-left: 6vw;
  padding-top: 423px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    font-size: ${fonts.acceleratorMobile};
    margin-top: 180px;
    padding-bottom: 38px;
  }
`;

export const AcceleratorBackground = styled.div`
background: url(${Accelerator});
background-size: cover;
`

export const InfoSection = styled.div`
  padding-left: 6vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-bottom: 135px;

  svg {
    fill: ${colors.white};
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    background-color: ${colors.black};
    color: ${colors.white};

    svg {
      fill: ${colors.black};
    }
  }
`;

export const InfoItem = styled.div`
  display: flex;
  margin-top: 135px;
  margin-right: 127px;
`;

export const InfoIcon = styled.img`
  width: 96px;
  height: 96px;
  margin-right: 27px;

  svg {
    fill: ${colors.black};
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    svg {
      fill: ${colors.white};
    }
  }
`;

export const InfoText = styled.div`
  width: 27vw;
`;

export const InfoHeader = styled.div`
  font-family: ${fonts.itc_avante_garde};
  font-size: ${fonts.InfoHeader};
  color: ${colors.black};
  margin-bottom: 24px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    color: ${colors.white};
  }
`;

export const InfoDescription = styled.div`
  font-family: ${fonts.itc_avante_garde};
  font-size: ${fonts.buttonSize};
  color: ${colors.black};

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 230px;
    color: ${colors.white};
  }
`;

export const TickerSection = styled.div`
  background-color: ${colors.black};
`;

export const MainTicker = styled.a`
  font-size: ${fonts.InfoHeader};
  font-family: ${fonts.space_mono};
  color: ${colors.orange};
  white-space: nowrap;
  display: flex;
  margin-top: 0px !important;
  margin-bottom: 0px !important;
  align-items: center;
  border-top: solid ${colors.white} 1px;
  border-bottom: solid ${colors.white} 1px;
  text-decoration: none;
  width: 280vw;
`;

export const ResourceLink = styled.a`
  color: ${colors.white};
  padding-top: 17px;
  padding-bottom: 17px;
  padding-left: 200px;
  display: flex;
  img {
    width: 40px;
    height: 44px;
    margin-left: 22px;
    margin-right: 22px;
  }
`;

export const AcceleratorCTA = styled.div`
  background-color: ${colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: no-wrap;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: none;
  }
`;

export const CTAHeader = styled.div`
  font-family: ${fonts.itc_avante_garde};
  color: ${colors.white};
  font-size: ${fonts.Heading2Size};
  width: 52vw;
  text-align: center;
  padding-top: 220px;
  margin-bottom: 81px;
`;

export const CTALink = styled.a`
  text-align: center;
  text-decoration: none;
  font-size: ${fonts.buttonSize};
  font-family: ${fonts.space_mono};
  color: ${colors.black};
  background-color: ${colors.orange};
  padding: 15px 20px;
  border-radius: 17px;
`;

export const CTAAlign = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 94px;
`;
