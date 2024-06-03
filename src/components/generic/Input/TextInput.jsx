import React from "react";
import { InputField } from "./Input.styles.js";

const TextInput = ({ type, placeholder, value, onChange }) => {
  return (
    <InputField>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputField>
  );
};

export default TextInput;
