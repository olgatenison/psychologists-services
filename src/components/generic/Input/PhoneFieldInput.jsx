import React from "react";
import { InputField } from "./Input.styles.js";

const PhoneFieldInput = ({
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <InputField>
      <input
        type="tel"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <div>{error}</div>}
    </InputField>
  );
};

export default PhoneFieldInput;
