import styled from "styled-components";
import colors from "./colors";
import fonts from "./font_names";

export const TeamHeader = styled.div`
  font-size: ${fonts.Heading2Size};
  font-family: ${fonts.itc_avante_garde};
  font-weight: 700;
  margin-left: 14vw;
  margin-top: 331px;
  margin-bottom: 127px;
`;

export const TeamMembers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
`;

export const TeamMember = styled.div`
  position: relative;
  width: 434px;
  height: 401px;
  margin-bottom: 30px;
  margin-right: 19px;
`;

export const TeamImage = styled.img`
  object-fit: cover;
  width: 434px;
  height: 401px;
`;

export const MemberText = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  width: 434px;
  height: 401px;
  background-color: rgb(0, 0, 0, 0.71);
  opacity: 0;

  &:hover {
    opacity: 1;
  }
`;

export const MemberName = styled.div`
  font-size: ${fonts.SpaceHeading2};
  color: ${colors.white};
  font-family: ${fonts.space_mono};
  margin-top: 137px;
  margin-left: 60px;
`;

export const MemberSub = styled.div`
  font-size: ${fonts.footerSizeDesktop};
  color: ${colors.white};
  font-family: ${fonts.space_mono};
  margin-left: 60px;
`;

