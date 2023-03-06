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
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    let response = await axios.post(
      "https://localserver.cendrol.com/cendrolpeopledev/api/login-user",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          authtoken: "Y3VzdG9tdG9rZW50b3Byb3RlY3RhcGlyb3V0ZXM=",
          usertype: "admin",
        },
      }
    );
    let result = await response.data;
    console.log("result", result);
    if (result) {
      localStorage.setItem("user", JSON.stringify(result.result.token));
      localStorage.setItem("token", result.result.token);
      setEmail("");
      setPassword("");
      setLoading(true);
      navigate("/dashboard");
      setLoading(false);
      alert("login done");
    } else {
      toast("User Type does not Exists", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
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
                value={email}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="login_btn">
              {loading ? <Loading /> : ""}Login now
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
