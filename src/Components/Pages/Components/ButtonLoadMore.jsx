import React from "react";
import Btn from "../../Buttons/Btn";

export default function ({ onclickButton, currentIndex, data }) {
  return (
    <Btn
      text={`Load more ${currentIndex + "/" + data.length}`}
      onClick={onclickButton}
    />
  );
}
