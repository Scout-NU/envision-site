import React from "react";
import { BackgroundColor, HeaderContainer, Logo,NavSection, NavCTA, NavLinks, NavLink } from "./Header.styles";



export default function Header() {
  return (
    <BackgroundColor>
      <HeaderContainer>
        <NavSection>
          <Logo>ENVISION</Logo>

          <NavLinks>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/portfolio">Portfolio</NavLink>
            <NavLink href="/partners">Partners</NavLink>
            <NavLink href="/accelerator">Accelerator</NavLink>

            <NavCTA>Apply Now</NavCTA>
          </NavLinks>
        </NavSection>
      </HeaderContainer>
    </BackgroundColor>
  );
}
