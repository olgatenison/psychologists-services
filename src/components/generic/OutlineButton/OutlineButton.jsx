import React from "react";
import { OutlineButtonStyled } from "./OutlineButton.styles";

const OutlineButton = ({ onClick, children }) => {
  return (
    <OutlineButtonStyled onClick={onClick}>{children}</OutlineButtonStyled>
  );
};

export default OutlineButton;
