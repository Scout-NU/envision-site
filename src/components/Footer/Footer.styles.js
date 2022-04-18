import styled from "styled-components";
import colors from "../../styles/colors";
import fonts from "../../styles/font_names";
import dimensions from "../../styles/dimensions";

export const FooterContainer = styled.div`
  font-family: ${fonts.space_mono}, monospace;
  width: 100vw;
  background-color: ${colors.black};
`;

export const FooterContent = styled.div`
  display: flex;
  padding-top: 86px;
  margin-left: 6vw;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    flex-direction: column-reverse;
    padding-top: 20px;

  }
`;

export const FooterCol = styled.div`
  margin-right: 8vw;
  font-size: ${fonts.footerSizeDesktop};

  input {
    margin-top: 9px;
    font-family: ${fonts.space_mono}, monospace;
    font-size: ${fonts.footerSizeDesktop};
    width: 27vw;
    height: 51px;
    border-radius: 9px;
    margin-bottom: 37px;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    input {
      width: 168px;
      font-size: ${fonts.buttonSize};
    }
  }
`;

export const FooterText = styled.div`
  color: ${colors.white};
`;

export const FooterLinks = styled.div`
  font-size: ${fonts.footerSizeDesktop};
  margin-bottom: 43px;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0px;
  }
`;

export const FooterImage = styled.img`

display: none;

@media (max-width: ${dimensions.maxwidthTablet}px) {
  display: initial;
  width: 127px !important;
}

`

export const FooterLink = styled.div`
  color: ${colors.white};
  text-decoration: underline;
  margin-bottom: 23px;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-right: 81px;
  }
`;

export const FooterSocials = styled.div`
  display: flex;
  margin-bottom: 37px;
`;

export const FooterSocial = styled.div`
  width: 60px;
  height: 60px;
  margin-top: 9px;
  margin-right: 16px;
  border-radius: 9px;
  background-color: ${colors.white};
  display: initial;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: none;
  }
`;

export const FooterCopyright = styled.div`
  color: ${colors.white};
  font-size: ${fonts.footerSizeDesktop};
  padding-bottom: 23px;
  width: 100vw;
  text-align: center;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    text-align: left;
    margin-left: 21px;
    width: 267px;
    margin-top: 10px;
    font-size: ${fonts.footerMobile};
  }
`;

export const FooterLinksSection = styled.div`
  display: flex;
  justify-content: flex-start;


  @media (min-width: ${dimensions.maxwidthTablet}px) {
    img {
      width: 38px;
      height: 38px;
      margin-right: 32px;
    }
  }
`;

export const ContactSection = styled.div`
  display: initial;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: none;
  }
`;

export const ConnectSection = styled.div`
  display: initial;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: none;
  }
`;
export const StayInTouch = styled.div`
  display: initial;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: none;
  }
`;

export const PrivacyPolicy = styled.div`
  display: initial;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: none;
  }
`;

export const PrivacyPolicyMobile = styled.div`
  display: none;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: initial;
    text-decoration: underline;
    color: ${colors.white};
    padding-bottom: 10px;
  }
`;
