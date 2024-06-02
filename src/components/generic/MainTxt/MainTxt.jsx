import React from "react";
import { MainTxtStyled } from "./MainTxt.styles.js";

const MainTxt = ({ children }) => {
  return <MainTxtStyled>{children}</MainTxtStyled>;
};

export default MainTxt;
