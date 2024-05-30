import React from "react";
import Logo from "./../../generic/Logo/Logo";
import AccentButton from "./../../generic/AccentButton/AccentButton";
import OutlineButton from "./../../generic/OutlineButton/OutlineButton";
import {
  HeaderWrapper,
  Nav,
  NavList,
  ButtonList,
  NavLink,
} from "./Header.styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo></Logo>
      <Nav>
        <NavList>
          <NavLink>Home</NavLink>
          <NavLink className="active">Psychologists</NavLink>
          <NavLink>Favorites</NavLink>
        </NavList>
      </Nav>
      <ButtonList>
        <OutlineButton>Log In</OutlineButton>
        <AccentButton>Registration</AccentButton>
      </ButtonList>
    </HeaderWrapper>
  );
};

export default Header;
