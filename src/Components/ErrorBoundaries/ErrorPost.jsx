import React from "react";
import Error from "./Error";

export default function ({ children }) {
  return (
    <Error
      cssContainer={{
        marginBottom: "1rem",
      }}
      title="Error al renderizar este album"
      desc="Ocurio un error al mostrar esta información"
    >
      {children}
    </Error>
  );
}