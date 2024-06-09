import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import SectionTitle from "./../../generic/SectionTitle/SectionTitle";
import MainTxt from "./../../generic/MainTxt/MainTxt";
import TextInput from "./../../generic/Input/TextInput.jsx";
import PasswordInput from "./../../generic/Input/PasswordInput.jsx";
import { FormWrapper } from "./LoginForn.styles.js";
import FormButton from "./../../generic/FormButton/FormButton.jsx";
import { auth } from "./../../../firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Валидационная схема
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

const LoginForm = ({ onLogin }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = userCredential.user;
        console.log("User Log In:", user);
        toast.success("Log In successful!");
        setSubmitting(false);
        resetForm();
        onLogin(user); // Вызов функции onLogin при успешном входе
      } catch (error) {
        console.error("Error logging in:", error);
        toast.error(error.message);
        setSubmitting(false);
      }
    },
  });

  return (
    <div>
      <ToastContainer />
      <SectionTitle>Log In</SectionTitle>
      <MainTxt>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a psychologist.
      </MainTxt>

      <FormWrapper>
        <form onSubmit={formik.handleSubmit}>
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

          <FormButton type="submit" disabled={formik.isSubmitting}>
            Log In
          </FormButton>
        </form>
      </FormWrapper>
    </div>
  );
};

export default LoginForm;
