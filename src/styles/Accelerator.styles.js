import styled from "styled-components";
import colors from "./colors";
import fonts from "./font_names";

export const AcceleratorHeader = styled.div`
  font-family: ${fonts.itc_avante_garde};
  font-size: ${fonts.Heading2Size};
  color: ${colors.black};
  font-weight: 700;
  width: 32vw;
  margin-left: 6vw;
  margin-top: 423px;
`;

export const InfoSection = styled.div`
margin-left: 6vw;
display: flex;
flex-wrap: wrap;
// justify-content:center;
align-items: center;
width: 100vw;
margin-bottom: 135px;

`

export const InfoItem = styled.div`
display: flex;
margin-top: 135px;
// margin-right: 132px;


`

export const InfoIcon = styled.img`
width: 96px;
height: 96px;
margin-right: 27px;
`

export const InfoText = styled.div`
width: 27vw;
`

export const InfoHeader = styled.div`
font-family: ${fonts.itc_avante_garde};
font-size: ${fonts.InfoHeader};
color: ${colors.black};
margin-bottom: 24px;


`

export const InfoDescription = styled.div`
font-family: ${fonts.itc_avante_garde};
font-size: ${fonts.buttonSize};
color: ${colors.black};
`