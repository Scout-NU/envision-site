import React from "react";
import { HeaderContainer, Logo, NavCTA, NavLinks, NavLink } from "./Header.styles";



export default function Header({ headerMode }) {
  return (
    <HeaderContainer headerMode={headerMode}>
      <Logo headerMode={headerMode}>ENVISION</Logo>
      <NavLinks headerMode={headerMode}>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/portfolio">Portfolio</NavLink>
        <NavLink href="/partners">Partners</NavLink>
        <NavLink href="/accelerator">Accelerator</NavLink>
        <NavCTA>Apply Now</NavCTA>
      </NavLinks>
    </HeaderContainer>
  );
}
