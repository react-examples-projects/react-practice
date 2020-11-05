import React from "react";
import Error from "./Error";

export default function (props) {
  return (
    <Error
      cssContainer={{
        width: "100vw",
        height: "100vh",
      }}
      title="Ocurrió un error en la aplicación"
      desc={`En el componente ${props.componentName}`}
    >
      {props.children}
    </Error>
  );
}
