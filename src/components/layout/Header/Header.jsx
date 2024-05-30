import React from "react";
import Logo from "./../../generic/Logo/Logo";
import AccentButton from "./../../generic/AccentButton/AccentButton";
import { HeaderWrapper, Nav, NavList } from "./Header.styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo></Logo>
      <Nav>
        <NavList>
          <li>Home</li>
          <li>Psychologists</li>
          <li>Favorites</li>
        </NavList>
      </Nav>
      <div>
        <button>Log In</button>
        <AccentButton>Registration</AccentButton>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
