// RegistrationForm.js
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import SectionTitle from "./../../generic/SectionTitle/SectionTitle";
import MainTxt from "./../../generic/MainTxt/MainTxt";
import TextInput from "./../../generic/Input/TextInput.jsx";
import PasswordInput from "./../../generic/Input/PasswordInput.jsx";
import { FormWrapper } from "./RegistrationForm.styles.js";
import FormButton from "./../../generic/FormButton/FormButton.jsx";
import { auth } from "./../../../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password should be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = userCredential.user;
        console.log("User registered:", user);
        toast.success("Registration successful!");
        setSubmitting(false);
        resetForm();
      } catch (error) {
        console.error("Error registering user:", error);
        toast.error(error.message);
        setSubmitting(false);
      }
    },
  });

  return (
    <div>
      <ToastContainer />
      <SectionTitle>Registration</SectionTitle>
      <MainTxt>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </MainTxt>

      <FormWrapper>
        <form onSubmit={formik.handleSubmit}>
          <TextInput
            type="text"
            placeholder="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div style={{ color: "red" }}>{formik.errors.name}</div>
          ) : null}

          <TextInput
            type="email"
            placeholder="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}

          <PasswordInput
            placeholder="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          ) : null}

          <PasswordInput
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div style={{ color: "red" }}>{formik.errors.confirmPassword}</div>
          ) : null}

          <FormButton type="submit" disabled={formik.isSubmitting}>
            Sign Up
          </FormButton>
        </form>
      </FormWrapper>
    </div>
  );
};

export default RegistrationForm;
