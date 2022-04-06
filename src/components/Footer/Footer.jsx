import React from "react";
import Heart from "../../styles/heart_icon.png";
import {
  FooterContainer,
  FooterContent,
  FooterCol,
  FooterText,
  FooterLinks,
  FooterLink,
  FooterSocials,
  FooterSocial,
  FooterCopyright,
  FooterLinksSection,
} from "./Footer.styles";


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
          <img alt="Heart Icon" src={Heart} />
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
