import styled from "styled-components";
import colors from "../../styles/colors";
import fonts from "../../styles/font_names";

export const HeaderContainer = styled.div`
  font-family: ${fonts.space_mono}, monospace;
  font-size: ${fonts.buttonSize};
  position: fixed;
  z-index: 1;
  padding-top: 47px;
  padding-bottom: 47px;
  top: 0;
  width: 100%;
  padding-left: 6vw;
  color: ${colors.white};
  background-color: ${(props) => props.headerMode === 'transparent' ? 'transparent' : `${colors.black}`};
`;

export const Logo = styled.div`
  position: absolute;
  color: ${(props) => props.headerMode === 'transparent' ? `${colors.black}` : `${colors.white}`};
`;

export const NavCTA = styled.div`
  padding: 13px 15px;
  border: solid 1px;
  border-radius: 10px;
`;

export const NavLinks = styled.ul`
  display: flex;
  position: absolute;
  right: 12vw;
  margin-top: -13px;
  padding: 0;
  align-items: center;
  color: ${(props) => props.headerMode === 'transparent' ? `${colors.black}` : `${colors.white}`};
`;

export const NavLink = styled.a`
  margin-right: 48px;
  text-decoration: none;
  color: inherit;
`;
