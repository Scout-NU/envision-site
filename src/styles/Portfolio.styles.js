import styled from "styled-components";
import colors from "./colors";
import fonts from "./font_names";
import dimensions from "../styles/dimensions";

export const PortfolioContainer = styled.div``;

export const PortfolioHeader = styled.div`
  font-size: ${fonts.Heading2Size};
  font-family: ${fonts.itc_avante_garde};
  margin-top: 197px;
  margin-left: 14vw;
  font-weight: 700;
`;

export const PortfolioDescription = styled.div`
  font-family: ${fonts.itc_avante_garde};
  font-size: ${fonts.BodySize};
  font-weight: 300;
  margin-left: 14vw;
  width: 28vw;
  margin-top: 20px;
`;

export const PortfolioCTA = styled.a`
  font-family: ${fonts.space_mono};
  font-size: ${fonts.buttonSize};
  background-color: ${colors.black};
  color: ${colors.white};
  padding: 13px 28px;
  text-decoration: none;
  border-radius: 10px;
`;

export const PortfolioCTAWrapper = styled.div`
  margin-top: 43px;
  margin-left: 14vw;
  margin-bottom: 234px;
`;

export const CohortHeader = styled.div`
  width: 86vw;
  text-align: center;
  background-color: ${colors.black};
  padding-top: 29px;
  margin-bottom: 14px;
`;

export const CohortHeaderText = styled.div`
  font-size: ${fonts.LargeBook};
  color: ${colors.white};
  font-family: ${fonts.itc_avante_garde};
  font-weight: 300;
`;

export const CohortDate = styled.div`
  color: ${colors.white};
  font-family: ${fonts.itc_avante_garde};
  font-size: ${fonts.BodySize};
  padding-bottom: 16px;
  font-weight: 300;
`;

export const CohortSection = styled.div`
  display: flex;
  justify-content: center;
`;

export const CohortList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CohortButton = styled.div`
  background-color: ${colors.black};
  text-align: center;
  cursor: pointer;
  padding: 29px 0;
  margin-bottom: 19px;
  width: 27vw;
  margin-top: 30px;
  margin-right: 1.66vw;
`;

export const CohortButtonHeader = styled.div`
  font-size: ${fonts.LargeBook};
  color: ${colors.white};
  font-family: ${fonts.itc_avante_garde};
  font-weight: 300;
`;

export const CohortButtonDate = styled.div`
  color: ${colors.white};
  font-family: ${fonts.itc_avante_garde};
  font-size: ${fonts.BodySize};
  font-weight: 300;
`;

export const CohortImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 86vw;
`;

export const MemberImage = styled.img`
  width: 27vw;
  height: 434px;
  object-fit: cover;
  margin-bottom: 30px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    height: 151px;
  }
`;

export const MemberContainer = styled.div`
  position: relative;
  width: 27vw;
  height: 434px;
  margin-right: 1.66vw;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    height: 151px;

  }
`;

export const MemberText = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  width: 27vw;
  height: 434px;
  background-color: rgb(0, 0, 0, 0.71);
  opacity: 0;

  &:hover {
    opacity: 255;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    height: 151px;

  }
`;

export const MemberName = styled.div`
  font-size: ${fonts.SpaceHeading2};
  color: ${colors.white};
  font-family: ${fonts.space_mono};
  margin-top: 137px;
  margin-left: 60px;
`;

export const MemberCompany = styled.div`
  font-size: ${fonts.buttonSize};
  color: ${colors.white};
  font-family: ${fonts.space_mono};
  margin-top: 13px;
  margin-left: 60px;
`;

export const MemberDescription = styled.div`
  font-size: ${fonts.BodySize};
  color: ${colors.white};
  font-family: ${fonts.itc_avante_garde};
  margin-left: 60px;
  margin-top: 13px;
  font-weight: 300;
`;
