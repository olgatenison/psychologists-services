import React, { useState } from "react";

// import { useFormik } from "formik";
// import * as Yup from "yup";

import SectionTitle from "./../../generic/SectionTitle/SectionTitle";
import MainTxt from "./../../generic/MainTxt/MainTxt";
import TextInput from "./../../generic/Input/TextInput.jsx";
import PasswordInput from "./../../generic/Input/PasswordInput.jsx";
import { FormWrapper, StyledAccentButton } from "./RegistrationForm.styles.js";

import { auth } from "./../../../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User registered:", user);
      setSuccess("Registration successful!");
      setError(null);
    } catch (error) {
      console.error("Error registering user:", error);
      setError(error.message);
      setSuccess(null);
    }
  };

  return (
    <div>
      <SectionTitle>Registration</SectionTitle>
      <MainTxt>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </MainTxt>

      <FormWrapper>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <form onSubmit={handleSubmit}>
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
          <PasswordInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <StyledAccentButton type="submit">Sign Up</StyledAccentButton>
        </form>
      </FormWrapper>
    </div>
  );
};

export default RegistrationForm;
