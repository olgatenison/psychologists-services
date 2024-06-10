import React from "react";
import { InputFieldTxt } from "./Input.styles.js";

const Textarea = ({ rows, placeholder, name, value, onChange, onBlur }) => {
  return (
    <InputFieldTxt>
      <textarea
        rows={rows}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </InputFieldTxt>
  );
};

export default Textarea;
