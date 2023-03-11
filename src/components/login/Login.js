import "../people.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login_logo from "../../assets/svgs/svg_1.svg";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Loading from "../../re_use/Loading";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnLoader, setBtnLoader] = useState(false);

  const base_url = process.env.REACT_APP_BASE_URL;

  const headers = {
    "Content-Type": "application/json;charset=utf-8",
    authtoken: "Y3VzdG9tdG9rZW50b3Byb3RlY3RhcGlyb3V0ZXM=",
    usertype: "admin",
  };

  const handleLogin = (e) => {
    setBtnLoader(true);
    e.preventDefault();
    axios
      .post(
        `${base_url}/login-user`,
        {
          email: email,
          password: password,
        },
        {
          headers,
        }
      )
      .then((response) => {
        localStorage.setItem("token", response.data.result.token);

        let status = response.status;

        if (status === 200) {
          navigate("/dashboard");
          setBtnLoader(false);
          toast.success("Login Successfull");
        } else {
          setBtnLoader(false);
          toast.error("Login Failed");
        }
      });
  };

  return (
    <div className="d-flex login_container">
      <div className="login_left"></div>
      <div className="login_right">
        <img src={login_logo} className="login_logo" alt="login_logo" />
        <form className="login_form" onSubmit={handleLogin}>
          <h2> Login to your account </h2>
          <div className="input_form">
            <div className="input_details">
              <label htmlFor="username" className="login_label">
                Email
              </label>
              <input
                type="text"
                id="username"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input_details">
              <label htmlFor="pass" className="login_label">
                Password
              </label>
              <input
                type="password"
                id="pass"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="login_btn">
              {btnLoader === true ? <Loading /> : ""}

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
