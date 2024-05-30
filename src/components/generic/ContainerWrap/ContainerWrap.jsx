import React from "react";
import { ContainerWrapStyled } from "./ContainerWrap.styles.js";

const ContainerWrap = ({ children }) => {
  return (
    <>
      <ContainerWrapStyled>{children}</ContainerWrapStyled>
    </>
  );
};

export default ContainerWrap;
