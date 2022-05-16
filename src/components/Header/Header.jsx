import React, { useState } from "react";
import {
  BackgroundColor,
  HeaderContainer,
  Logo,
  NavSection,
  NavCTA,
  NavLinks,
  NavLink,
  HamburgerMenu,
  HamburgerLinks,
} from "./Header.styles";
import CloseIcon from "../../styles/closeicon.png";
import HamburgerIcon from "../../styles/hamburger.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
      <HeaderContainer className={open ? "open" : ""}>
        <NavSection>
          <Logo href="/">ENVISION</Logo>
          <HamburgerMenu
            onClick={() => setOpen(!open)}
            className={open ? "open" : ""}
          >
            <img src={open ? CloseIcon : HamburgerIcon} />
          </HamburgerMenu>
          <NavLinks>
            <li>
              {" "}
              <NavLink href="/about">About</NavLink>
            </li>
            <li>
              <NavLink href="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              {" "}
              <NavLink href="/partners">Partners</NavLink>
            </li>
            <li>
              {" "}
              <NavLink href="/accelerator">Accelerator</NavLink>
            </li>

            <NavCTA href="/apply">Apply Now</NavCTA>
          </NavLinks>

          <HamburgerLinks className={open ? "open" : ""}>
            <li>
              {" "}
              <NavLink href="/about">About</NavLink>
            </li>
            <li>
              <NavLink href="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              {" "}
              <NavLink href="/partners">Partners</NavLink>
            </li>
            <li>
              {" "}
              <NavLink href="/accelerator">Accelerator</NavLink>
            </li>
            <li>
              {" "}
              <NavLink href="/apply">Apply</NavLink>
            </li>
            <li>
              {" "}
              <NavLink href="/team">Team</NavLink>
            </li>
          </HamburgerLinks>
        </NavSection>
      </HeaderContainer>
  );
}
