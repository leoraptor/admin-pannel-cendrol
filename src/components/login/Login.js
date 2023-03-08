import "../people.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login_logo from "../../assets/svgs/svg_1.svg";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://localserver.cendrol.com/cendrolpeopledev/api/login-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            authtoken: "Y3VzdG9tdG9rZW50b3Byb3RlY3RhcGlyb3V0ZXM=",
            usertype: "admin",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      const data = await response.json();
      console.log(data);
      let Status = data.result.active;
      console.log(Status);
      if (Status === true) {
        console.log("toast");

        localStorage.setItem("user", JSON.stringify(data.result.token));
        localStorage.setItem("token", data.result.token);
        navigate("/dashboard");
        toast.success("Login Success");
      } else {
        toast.error("cant log in");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later.");
    }
    // let response = await axios.post(
    //   "https://localserver.cendrol.com/cendrolpeopledev/api/login-user",
    //   {
    //     email: email,
    //     password: password,
    //   },
    //   {
    //     headers: {
    //       "Content-Type": "application/json;charset=utf-8",
    //       authtoken: "Y3VzdG9tdG9rZW50b3Byb3RlY3RhcGlyb3V0ZXM=",
    //       usertype: "admin",
    //     },
    //   }
    // );
    // let result = await response.data;
    // console.log("result", result);
    // if (result) {
    //   localStorage.setItem("user", JSON.stringify(result.result.token));
    //   localStorage.setItem("token", result.result.token);
    //   setEmail("");
    //   setPassword("");
    //   navigate("/dashboard");
    //   toast("Login Success");
    // } else {
    //   toast.error("User Type does not Exists", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: true,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   });
    // }
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
              Login now
            </button>

            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
