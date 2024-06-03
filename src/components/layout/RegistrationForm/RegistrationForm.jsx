import React, { useState } from "react";
import SectionTitle from "./../../generic/SectionTitle/SectionTitle";
import MainTxt from "./../../generic/MainTxt/MainTxt";
import TextInput from "./../../generic/Input/TextInput.jsx";
import PasswordInput from "./../../generic/Input/PasswordInput.jsx";
import { FormWrapper, StyledAccentButton } from "./RegistrationForm.styles.js";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <SectionTitle>Registration</SectionTitle>
      <MainTxt>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </MainTxt>

      <FormWrapper>
        <TextInput
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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

        <StyledAccentButton type="submit">Sign Up</StyledAccentButton>
      </FormWrapper>
    </div>
  );
};

export default RegistrationForm;
