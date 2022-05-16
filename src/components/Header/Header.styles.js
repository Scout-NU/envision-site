import styled from "styled-components";
import colors from "../../styles/colors";
import fonts from "../../styles/font_names";
import dimensions from "../../styles/dimensions";

export const HeaderContainer = styled.div`
  font-family: ${fonts.space_mono}, monospace;
  font-size: ${fonts.buttonSize};
  position: fixed;
  z-index: 1;
  padding-top: 47px;
  padding-bottom: 47px;
  top: 0;
  width: 100vw;
  padding-left: 6vw;
  color: ${colors.white};
  background-color: ${colors.black};

  &.open {
    height: 100vh;
  }
`;

export const Logo = styled.a`
  position: absolute;
  background-color: ${colors.black};
  text-decoration: none;
  color: ${colors.white};
`;

export const NavSection = styled.div`
  background-color: ${colors.black};
  width: 100vw;
`;

export const NavCTA = styled.a`
  padding: 13px 15px 13px 15px;
  border: solid 1px;
  border-radius: 10px;
  text-decoration: none;
  color: ${colors.white};
`;

export const NavLinks = styled.ul`
  display: none;
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    position: absolute;
    right: 12vw;
    margin-top: -13px;
    padding: 0px;
    background-color: ${colors.black};
    align-items: center;
    list-style: none;
  }
`;

export const HamburgerLinks = styled.ul`
  display: none;
  list-style: none;
  padding-top: 45px;
  float: left;
  margin-left: -6vw;
  font-size: ${fonts.SponsorsHeader};

  li {
    margin-top: 25px;
  }

  &.open {
    display: block;
  }
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  margin-right: 48px;
  text-decoration: none;
  color: inherit;
`;

export const HamburgerMenu = styled.div`
  display: block;
  z-index: 2;
  width: 100vw;

  img {
    width: 34px;
    height: 34px;
    position: absolute;
    right: 41px;
  }
  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: none;
  }
`;
