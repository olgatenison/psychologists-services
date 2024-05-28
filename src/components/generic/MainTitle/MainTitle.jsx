import React from "react";
import { MainTitleStyled } from "./MainTitle.styles.js";

const MainTitle = ({ children }) => {
  return <MainTitleStyled>{children}</MainTitleStyled>;
};

export default MainTitle;
