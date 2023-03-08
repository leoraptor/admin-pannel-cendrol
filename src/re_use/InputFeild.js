import React from "react";
import "../components/people.css";

const InputFeild = (props) => {
  return (
    <div>
      <input
        className="input_feild"
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputFeild;
