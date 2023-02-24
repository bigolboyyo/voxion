import React from "react";

const ToggleButton = ({ toggleComponent }) => {
  return (
    <>
      <button
        onClick={toggleComponent}
        style={{
          backgroundColor: "#1E1E1E",
          color: "#F8F8F8",
          border: "none",
          padding: "10px 16px",
          borderRadius: "20px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
          cursor: "pointer",
          width: "6%",
        }}
      ></button>
    </>
  );
};

export default ToggleButton;
