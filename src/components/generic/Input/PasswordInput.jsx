import React, { useState } from "react";
import { InputField, IconWrapper } from "./Input.styles.js";
import svg from "./../../../img/svg/sprite.svg";

const PasswordInput = ({ placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputField>
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <IconWrapper onClick={handlePasswordToggle}>
        <svg>
          <use href={`${svg}${showPassword ? "#icon-eye-off" : "#icon-eye"}`} />
        </svg>
      </IconWrapper>
    </InputField>
  );
};

export default PasswordInput;
