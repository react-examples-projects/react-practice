import React from "react";
import detect from "../../Helpers/classNameDetect";

export default function ({ text, ...props }) {
  return (
    <button {...props} className={`btn${detect(props)}`}>
      {text}
    </button>
  );
}
