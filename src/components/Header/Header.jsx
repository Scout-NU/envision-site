import React from "react";
import {
  BackgroundColor,
  HeaderContainer,
  Logo,
  NavSection,
  NavCTA,
  NavLinks,
  NavLink,
  HamburgerMenu
} from "./Header.styles";



export default function Header() {
  return (
    <BackgroundColor>
      <HeaderContainer>
        <NavSection>
          <Logo href="/">ENVISION</Logo>

          <NavLinks>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/portfolio">Portfolio</NavLink>
            <NavLink href="/partners">Partners</NavLink>
            <NavLink href="/accelerator">Accelerator</NavLink>

            <NavCTA href="/apply">Apply Now</NavCTA>
          </NavLinks>

          {/* <HamburgerMenu>

          </HamburgerMenu> */}
        </NavSection>
      </HeaderContainer>
    </BackgroundColor>
  );
}
