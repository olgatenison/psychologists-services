import React, { useState } from "react";
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
import Modal from "./../Modal/Modal";
import LoginForm from "./../LoginForm/LoginForm";
import RegistrationForm from "./../RegistrationForm/RegistrationForm";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState(""); // 'login' or 'register'

  const openModal = (type) => {
    console.log(`Opening modal for ${type}`);
    setFormType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormType("");
  };

  return (
    <>
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
          <OutlineButton onClick={() => openModal("login")}>
            Log In
          </OutlineButton>
          <AccentButton onClick={() => openModal("register")}>
            Registration
          </AccentButton>
        </ButtonList>
      </HeaderWrapper>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {formType === "login" ? <LoginForm /> : <RegistrationForm />}
      </Modal>
    </>
  );
};

export default Header;
