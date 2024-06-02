import React from "react";
import { AccentButtonleStyled } from "./AccentButton.styles.js";

const AccentButton = ({ onClick, children }) => {
  return (
    <AccentButtonleStyled onClick={onClick}>{children}</AccentButtonleStyled>
  );
};

export default AccentButton;
