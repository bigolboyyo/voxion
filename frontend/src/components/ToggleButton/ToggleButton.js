import React from "react";

const ToggleButton = ({ toggleComponent, currentComponent }) => {
  return (
    <>
      <button
        onClick={toggleComponent}
        style={{
          backgroundColor: currentComponent ? "#F8F8F8" : "#1E1E1E",
          color: currentComponent ? "#1E1E1E" : "#F8F8F8",
          border: "none",
          padding: "10px 16px",
          borderRadius: "20px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
          cursor: "pointer",
          width: "calc(100vw - 95%)",
        }}
      >
        {currentComponent ? "Text" : "Audio"}
      </button>
    </>
  );
};

export default ToggleButton;
