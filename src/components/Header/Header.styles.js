import styled from "styled-components";
import colors from "../../styles/colors";
import fonts from "../../styles/font_names";

export const BackgroundColor = styled.div`
  background-color: ${colors.black};
`;

export const HeaderContainer = styled.div`
  font-family: ${fonts.space_mono}, monospace;
  font-size: ${fonts.buttonSize}px;
  position: relative;
  padding-top: 131px;
  padding-bottom: 57px;

  margin-left: 6vw;
  color: ${colors.white};
  background-color: ${colors.black};
`;

export const Logo = styled.div`
  position: absolute;
  background-color: ${colors.black};
`;

export const NavSection = styled.div`
  background-color: ${colors.black};
  width: 100vw;
`;

export const NavCTA = styled.div`
  padding: 13px 15px 13px 15px;
  border: solid 1px;
  border-radius: 10px;
`;

export const NavLinks = styled.ul`
  display: flex;
  position: absolute;
  right: 6vw;
  margin-top: -13px;
  padding: 0px;
  background-color: ${colors.black};
  align-items: center;
`;

export const NavLink = styled.div`
  margin-right: 48px;
`;