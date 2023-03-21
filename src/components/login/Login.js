import "../people.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login_logo from "../../assets/svgs/svg_1.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInterceptor from "../../helpers/axiosInterceptor";
import Loading from "../../re_use/Loading";
import { useFormik } from "formik";
import { logInSchema } from "../../schemas/validation";
const Login = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const [btnLoader, setBtnLoader] = useState(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: logInSchema,
      onSubmit: (values) => {
        setBtnLoader(true);
        axiosInterceptor
          .post(`/login-user`, {
            email: values.email,
            password: values.password,
          })
          .then((res) => {
            localStorage.setItem("token", res.data.result.token);
            let status = res.status;
            if (status === 200) {
              navigate("/dashboard");
              setBtnLoader(false);
            }
          })
          .catch((error) => {
            setBtnLoader(false);
            toast.error(error.response.data.message);
          });
      },
    });
  return (
    <div className="d-flex login_container">
      <div className="login_left"></div>
      <div className="login_right">
        <img src={login_logo} className="login_logo" alt="login_logo" />
        <form className="login_form" onSubmit={handleSubmit}>
          <h2> Login to your account </h2>
          <div className="input_form">
            <div className="input_details">
              <label htmlFor="email" className="login_label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <p className="mt-2 error_mess ">{errors.email}</p>
              )}
            </div>
            <div className="input_details">
              <label htmlFor="password" className="login_label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (
                <p className="mt-2 error_mess">{errors.password}</p>
              )}
            </div>
            <button type="submit" className="login_btn">
              {btnLoader && <Loading />}
              <p className="mb-0 mx-4">Login now</p>
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
