import React, { useState } from "react";
import GlobalState from "../Context";
import albums from "../db/data";

export default function (props) {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <GlobalState.Provider
      value={{
        albums,
        currentUser,
        setCurrentUser,
      }}
    >
      {props.children}
    </GlobalState.Provider>
  );
}
