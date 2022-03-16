import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";

const BackgroundColor = styled.div`
  background-color: ${colors.black};
  position: relative;
  z-index: 1;

`;

const HeaderContainer = styled.div`
  font-family: "Space Mono", monospace;
  font-size: 16px;
  position: relative;

  padding-top: 131px;
  padding-bottom: 57px;

  margin-left: 6vw;
  color: ${colors.white};
  background-color: ${colors.black};
`;

const Logo = styled.div`
  position: absolute;
  background-color: ${colors.black};
`;

const NavSection = styled.div`
  background-color: ${colors.black};
  width: 100vw;
`;

const NavCTA = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 13px;
  padding-bottom: 13px;
  border: solid 1px;
  border-radius: 10px;
`;

const NavLinks = styled.ul`
  display: flex;
  position: absolute;
  right: 6vw;
  margin-top: -13px;
  padding: 0px;
  background-color: ${colors.black};
  align-items: center;
`;

const NavLink = styled.div`
  margin-right: 48px;
`;

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
