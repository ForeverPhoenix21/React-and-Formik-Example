import React from "react";
import "./App.css";
import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
    },
    onSubmit: (values) => {
      alert("Login Successful");
    },

    validate: (values) => {
      let errors = {};
//       if (!values.name) errors.name = "Field required"; Does not trigger Alert if enabled. 
      if (!values.password) errors.password = "Field required";
      if (!values.email) {
        errors.email = "Field required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Username should be an email";
      }
      return errors;
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {/* <div> User Name</div> ------User name not needed for exercise submition 
        <input
          id="name"
          type="text"
          name="name"
          placeholder="UserName"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? (
          <div id="nameError" style={{ color: "red" }}>
            {formik.errors.name}
          </div>
        ) : null} */}
        <div>Email</div>
        <input
          id="emailField"
          type="text"
          name="email"
          placeholder="UserName@email.com"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div id="emailError" style={{ color: "red" }}>
            {formik.errors.email}
          </div>
        ) : null}
        <div>Password</div>
        <input
          id="pswField"
          type="text"
          name="password"
          placeholder="Don't Tell "
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.email ? (
          <div id="pswError" style={{ color: "red" }}>
            {formik.errors.password}
          </div>
        ) : null}
        <br />

        <button id="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
