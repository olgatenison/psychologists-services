import React, { useState } from "react";
import SectionTitle from "./../../generic/SectionTitle/SectionTitle";
import MainTxt from "./../../generic/MainTxt/MainTxt";
import TextInput from "./../../generic/Input/TextInput.jsx";
import PasswordInput from "./../../generic/Input/PasswordInput.jsx";
import { FormWrapper } from "./LoginForn.styles.js";
import FormButton from "./../../generic/FormButton/FormButton.jsx";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <SectionTitle>Log In</SectionTitle>
      <MainTxt>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a psychologist.
      </MainTxt>

      <FormWrapper>
        <TextInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <FormButton type="submit">Log In</FormButton>
      </FormWrapper>
    </div>
  );
};

export default LoginForm;
