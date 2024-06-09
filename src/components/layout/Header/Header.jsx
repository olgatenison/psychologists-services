import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./../../generic/Logo/Logo";
import AccentButton from "./../../generic/AccentButton/AccentButton";
import OutlineButton from "./../../generic/OutlineButton/OutlineButton";
import UserLogo from "../../generic/UserLogo/UserLogo";
import Modal from "./../Modal/Modal";
import LoginForm from "./../LoginForm/LoginForm";
import RegistrationForm from "./../RegistrationForm/RegistrationForm";
import {
  HeaderWrapper,
  Nav,
  NavList,
  NavItem,
  ButtonList,
} from "./Header.styles";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";

const Header = ({ user, onLogin, onRegister }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState(""); // 'login' или 'register'

  const openModal = (type) => {
    console.log(`Opening modal for ${type}`);
    setFormType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormType("");
  };

  const handleLogin = (user) => {
    onLogin(user);
    closeModal();
  };

  const handleRegister = (user) => {
    onRegister(user);
    closeModal();
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign Out successful");
        onLogin(null); // или используйте другой способ для обновления состояния родителя
      })
      .catch((error) => console.error("Error signing out: ", error));
  };

  return (
    <>
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavList>
            <NavItem>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/psychologists"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Psychologists
              </NavLink>
            </NavItem>
            {user && (
              <NavItem>
                <NavLink
                  to="/favorites"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Favorites
                </NavLink>
              </NavItem>
            )}
          </NavList>
        </Nav>
        <ButtonList>
          {!user ? (
            <>
              <OutlineButton onClick={() => openModal("login")}>
                Log In
              </OutlineButton>
              <AccentButton onClick={() => openModal("register")}>
                Registration
              </AccentButton>
            </>
          ) : (
            <>
              <UserLogo>{user.displayName}</UserLogo>
              <OutlineButton onClick={handleSignOut}>Log out</OutlineButton>
            </>
          )}
        </ButtonList>
      </HeaderWrapper>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {formType === "login" ? (
          <LoginForm onLogin={handleLogin} />
        ) : (
          <RegistrationForm onRegister={handleRegister} />
        )}
      </Modal>
    </>
  );
};

export default Header;
