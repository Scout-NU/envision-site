import React from "react"; 
import { BackgroundColor, HeaderContainer, Logo,NavSection, NavCTA, NavLinks, NavLink } from "./Header.styles";



export default function Header() {
  return (
    <BackgroundColor>
      <HeaderContainer>
        <NavSection>
          <Logo>ENVISION</Logo>

          <NavLinks>
            <NavLink>About</NavLink>
            <NavLink>Portfolio</NavLink>
            <NavLink>Partners</NavLink>
            <NavLink>Accelerator</NavLink>

            <NavCTA>Apply Now</NavCTA>
          </NavLinks>
        </NavSection>
      </HeaderContainer>
    </BackgroundColor>
  );
}
