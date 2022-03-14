import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import Heart from "../styles/heart_icon.png";

const FooterContainer = styled.div`
  font-family: "Space Mono", monospace;
  width: 100vw;
  background-color: ${colors.black};
`;

const FooterContent = styled.div`
  display: flex;
  padding-top: 86px;
  margin-left: 6vw;
`;

const FooterCol = styled.div`
  margin-right: 8vw;
  font-size: 20px;

  input {
    margin-top: 9px;
    font-family: "Space Mono", monospace;
    font-size: 20px;
    width: 27vw;
    height: 51px;
    border-radius: 9px;
    margin-bottom: 37px;
  }
`;

const FooterText = styled.div`
  color: ${colors.white};
`;

const FooterLinks = styled.div`
  font-size: 20px;
  margin-bottom: 43px;
`;

const FooterLink = styled.div`
  color: ${colors.white};
  text-decoration: underline;
  margin-bottom: 23px;
`;

const FooterSocials = styled.div`
  display: flex;
  margin-bottom: 37px;
`;

const FooterSocial = styled.div`
  width: 60px;
  height: 60px;
  margin-top: 9px;
  margin-right: 16px;
  border-radius: 9px;
  background-color: ${colors.white};
`;

const FooterCopyright = styled.div`
  color: ${colors.white};
  font-size: 20px;
  padding-bottom: 23px;
  width: 100vw;
  text-align: center;
`;

const FooterLinksSection = styled.div`
display: flex;
justify-content: flex-start;

img {
  width: 38px;
  height: 38px;
  margin-right: 32px;
}


`

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterCol>
          <FooterText>STAY IN TOUCH</FooterText>

          <input
            type="text"
            placeholder="you@mail.com"
            id="fname"
            name="fname"
          />

          <FooterText>CONTACT</FooterText>
          <FooterText>EMAIL@ENVISIONACCELERATOR.COM</FooterText>
        </FooterCol>
        <FooterCol>
          <FooterText>CONNECT</FooterText>

          <FooterSocials>
            <FooterSocial />
            <FooterSocial />
            <FooterSocial />
          </FooterSocials>

          <FooterText>PRIVACY POLICY</FooterText>
        </FooterCol>
        <FooterLinksSection>
          <img src={Heart} />
        <FooterLinks>
          <FooterLink>WALL OF LOVE</FooterLink>
          <FooterLink>ABOUT</FooterLink>
          <FooterLink>PORTFOLIO</FooterLink>
          <FooterLink>PARTNERS</FooterLink>
          <FooterLink>ACCELERATOR</FooterLink>
        </FooterLinks>
        </FooterLinksSection>

      </FooterContent>

      <FooterCopyright>
        Copyright © 2021 Envision Accelerator. All rights reserved.
      </FooterCopyright>
    </FooterContainer>
  );
}
