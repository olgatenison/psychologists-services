import React from "react";
import { FormButtonStyled } from "./FormButton.styles";

const FormButton = ({ onClick, children }) => {
  return <FormButtonStyled onClick={onClick}>{children}</FormButtonStyled>;
};

export default FormButton;
