import React from "react";
import { UserLogoStyled, UserIcon, UserName } from "./UserLogo.styles.js";
import svg from "./../../../img/svg/userlogo.svg";

const UserLogo = ({ children }) => {
  return (
    <UserLogoStyled>
      <UserIcon>
        <img src={svg} alt="user" />
      </UserIcon>
      <UserName>{children}</UserName>
    </UserLogoStyled>
  );
};

export default UserLogo;
