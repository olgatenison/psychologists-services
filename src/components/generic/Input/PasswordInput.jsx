import React, { useState } from "react";
import { InputField, IconWrapper } from "./Input.styles.js";
import svg from "./../../../img/svg/sprite.svg";

const PasswordInput = ({ placeholder, name, value, onChange, onBlur }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputField>
      <input
        type="password"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <IconWrapper onClick={handlePasswordToggle}>
        <svg>
          <use href={`${svg}${showPassword ? "#icon-eye" : "#icon-eye-off"}`} />
        </svg>
      </IconWrapper>
    </InputField>
  );
};

export default PasswordInput;
