import styled from "styled-components";
import colors from "./colors";
import fonts from "./font_names";

export const PartnersHeader = styled.div``;

export const PartnersHeaderText = styled.div`
  font-family: ${fonts.itc_avante_garde};
  font-size: ${fonts.Heading2Size};
  font-weight: 700;
  margin-top: 546px;
  margin-left: 6vw;
`;

export const PartnersHeaderDescription = styled.div`
  font-family: ${fonts.itc_avante_garde};
  font-size: ${fonts.BookSub};
  font-weight: 300;
  margin-left: 42vw;
  width: 42vw;
  margin-bottom: 64px;
`;

export const SponsorSection = styled.div`
  background-color: ${colors.black};
  padding-left: 6vw;
`;

export const SponsorsHeadline = styled.div`
  font-family: ${fonts.itc_avante_garde};
  font-size: ${fonts.SponsorsHeader};
  color: ${colors.white};
  padding-top: 107px;
`;

export const SponsorsDescription = styled.div`
  font-family: ${fonts.itc_avante_garde};
  font-size: ${fonts.BodySize};
  font-weight: 300;
  color: ${colors.white};
  width: 40vw;
  padding-top: 22px;
`;

export const SponsorImage = styled.img`
  width: 243px;
  height: 172px;
  margin-top: 27px;
  margin-bottom: 27px;
`;

export const SponsorCarousel = styled.div`
  border: solid ${colors.white} 1px;
  margin-top: 23px;
  width: 86vw;
  border-radius: 0px 24px 24px 24px;

  button {
    display: none;
  }
`;

export const PartnersCTA = styled.div`
  background-color: ${colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: no-wrap;
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
  padding: 15px 20px 15px 20px;
  border-radius: 17px;
`;

export const CTAAlign = styled.div`
display: flex;
justify-content: center;
margin-bottom: 94px;

`
