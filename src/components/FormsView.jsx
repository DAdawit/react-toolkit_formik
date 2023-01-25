import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
export const Formsview = () => {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
  };
  const onSubmit = (values) => {
    console.log("form data", values);
  };

  const validationSchema = yup.object({
    name: yup.string().required("Required"),
    email: yup.string().email("invalid email").required("Required"),
    channel: yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <h1>forms </h1>
        <label htmlFor="name">Name </label>
        <Field type="text" name="name" id="name" />
        <ErrorMessage name="name" />
        <br></br>
        <label htmlFor="email">Email </label>
        <Field type="email" name="email" id="email" />
        <ErrorMessage name="email" />

        <br></br>
        <label htmlFor="channel">channel </label>
        <Field type="text" name="channel" id="channel" />
        <ErrorMessage name="channel" />
        <br></br>
        <button type="submit">submit</button>
      </Form>
    </Formik>
  );
};

export default Formsview;
