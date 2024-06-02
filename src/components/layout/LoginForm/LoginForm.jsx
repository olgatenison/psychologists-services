import React, { useState } from "react";
import SectionTitle from "./../../generic/SectionTitle/SectionTitle";
import MainTxt from "./../../generic/MainTxt/MainTxt";

import {
  FormWrapper,
  InputField,
  IconWrapper,
  StyledAccentButton,
} from "./LoginForn.styles.js";
import svg from "./../../../img/svg/sprite.svg";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <SectionTitle>Log In</SectionTitle>
      <MainTxt>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a psychologist.
      </MainTxt>

      <FormWrapper>
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

        <StyledAccentButton type="submit">Log In</StyledAccentButton>
      </FormWrapper>
    </div>
  );
};

export default LoginForm;
