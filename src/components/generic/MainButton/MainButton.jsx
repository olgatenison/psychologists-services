import React from "react";
import { MainButtonStyled } from "./MainButton.styles.js";

const MainButton = ({ children }) => {
  return <MainButtonStyled>{children}</MainButtonStyled>;
};

export default MainButton;
