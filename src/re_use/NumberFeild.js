import React from "react";
import "../components/people.css";

const InputFeild = (props) => {
  return (
    <div className="d-flex">
      <div className="numer_91">+91</div>
      <input
        className="input_feild_number"
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputFeild;
