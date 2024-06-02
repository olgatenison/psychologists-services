import React, { useState } from "react";
import SectionTitle from "./../../generic/SectionTitle/SectionTitle";
import MainTxt from "./../../generic/MainTxt/MainTxt";
import {
  FormWrapper,
  InputField,
  IconWrapper,
  StyledAccentButton,
} from "./RegistrationForm.styles.js";
import svg from "./../../../img/svg/sprite.svg";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <SectionTitle>Registration</SectionTitle>
      <MainTxt>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </MainTxt>

      <FormWrapper>
        <InputField>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputField>
        <InputField>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputField>
        <InputField>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <IconWrapper onClick={handlePasswordToggle}>
            <svg>
              <use
                href={`${svg}${showPassword ? "#icon-eye-off" : "#icon-eye"}`}
              />
            </svg>
          </IconWrapper>
        </InputField>

        <StyledAccentButton type="submit">Sign Up</StyledAccentButton>
      </FormWrapper>
    </div>
  );
};

export default RegistrationForm;
