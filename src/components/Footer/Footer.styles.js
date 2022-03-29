import styled from "styled-components";
import colors from "../../styles/colors";
import fonts from "../../styles/font_names";

export const FooterContainer = styled.div`
  font-family: ${fonts.space_mono}, monospace;
  width: 100vw;
  background-color: ${colors.black};
`;

export const FooterContent = styled.div`
  display: flex;
  padding-top: 86px;
  margin-left: 6vw;
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
`;

export const FooterText = styled.div`
  color: ${colors.white};
`;

export const FooterLinks = styled.div`
  font-size: ${fonts.footerSizeDesktop};
  margin-bottom: 43px;
`;

export const FooterLink = styled.div`
  color: ${colors.white};
  text-decoration: underline;
  margin-bottom: 23px;
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
`;

export const FooterCopyright = styled.div`
  color: ${colors.white};
  font-size: ${fonts.footerSizeDesktop};
  padding-bottom: 23px;
  width: 100vw;
  text-align: center;
`;

export const FooterLinksSection = styled.div`
  display: flex;
  justify-content: flex-start;

  img {
    width: 38px;
    height: 38px;
    margin-right: 32px;
  }
`;
