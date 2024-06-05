import React from "react";
import { InputField } from "./Input.styles.js";

const TextInput = ({ type, placeholder, name, value, onChange, onBlur }) => {
  return (
    <InputField>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </InputField>
  );
};

export default TextInput;
