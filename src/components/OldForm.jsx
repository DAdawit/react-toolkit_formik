import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
export const OldForm = () => {
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

  // const validate = (values) => {
  //   let errors = {};
  //   if (!values.name) {
  //     errors.name = "Required";
  //   }
  //   if (!values.email) {
  //     errors.email = "Required";
  //   }
  //   if (!values.channel) {
  //     errors.channel = "Required";
  //   }
  //   return errors;
  // };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    // validate,
  });
  console.log("form visited", formik.touched);
  return (
    <div>
      <h1>old Forms</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <br></br>
        {formik.touched.name && formik.errors.name ? (
          <span className="error">{formik.errors.name}</span>
        ) : null}
        <br></br>
        <label htmlFor="email">Email </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <br />
        {formik.touched.email && formik.errors.email ? (
          <span className="error">{formik.errors.email}</span>
        ) : null}

        <br></br>
        <label htmlFor="channel">channel </label>
        <input
          type="text"
          name="channel"
          id="channel"
          value={formik.values.channel}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <br></br>
        {formik.touched.channel && formik.errors.channel ? (
          <span className="error">{formik.errors.channel}</span>
        ) : null}
        <br></br>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default OldForm;
