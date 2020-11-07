import React from "react";

export default function ({ onclickButton, currentIndex, data }) {
  return (
    <button className="btn" onClick={onclickButton}>
      Load More
      <span
        style={{
          display: "inline-block",
          marginLeft: "5px",
        }}
      >
        {currentIndex}/{data.length}
      </span>
    </button>
  );
}
