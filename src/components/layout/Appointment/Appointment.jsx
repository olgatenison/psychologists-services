import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

import SectionTitle from "./../../generic/SectionTitle/SectionTitle";
import MainTxt from "./../../generic/MainTxt/MainTxt";

import TextInput from "./../../generic/Input/TextInput.jsx";
import PhoneFieldInput from "./../../generic/Input/PhoneFieldInput.jsx";
import TimeSelect from "../../generic/Input/TimeSelect.jsx";
import FormButton from "./../../generic/FormButton/FormButton.jsx";
import Textarea from "./../../generic/Input/Textarea.jsx";

import {} from "./../Card/Card.styles.js";
import {
  FormWrapper,
  PsychologistsModal,
  RoleModal,
  NameModal,
  RowWrapper,
} from "./Appointment.styles.js";

const Appointment = ({ psychologist }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      time: "",
      comment: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      phone: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      time: Yup.string().required("Required"),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      console.log(values);
      toast.success("Appointment request sent successfully!");
      setSubmitting(false);
      resetForm();
    },
  });

  return (
    <>
      <ToastContainer />
      <SectionTitle>Make an appointment with a psychologists</SectionTitle>
      <MainTxt>
        You are on the verge of changing your life for the better. Fill out the
        short form below to book your personal appointment with a professional
        psychologist. We guarantee confidentiality and respect for your privacy.
      </MainTxt>

      <PsychologistsModal>
        <img src={psychologist.avatar_url} alt={psychologist.name} />
        <div>
          <RoleModal>Your psychologists</RoleModal>
          <NameModal>{psychologist.name}</NameModal>
        </div>
      </PsychologistsModal>

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
            <div>{formik.errors.name}</div>
          ) : null}

          <RowWrapper>
            <PhoneFieldInput
              placeholder="+380"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && formik.errors.phone}
            />
            <TimeSelect
              name="time"
              value={formik.values.time}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.time && formik.errors.time ? (
              <div>{formik.errors.time}</div>
            ) : null}
          </RowWrapper>
          <TextInput
            type="email"
            placeholder="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
          <Textarea
            rows="4"
            placeholder="Comment"
            name="comment"
            value={formik.values.comment}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormButton type="submit" disabled={formik.isSubmitting}>
            Send
          </FormButton>
        </form>
      </FormWrapper>
    </>
  );
};

export default Appointment;
