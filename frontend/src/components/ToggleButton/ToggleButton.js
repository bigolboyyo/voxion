import React, { useState } from "react";

const ToggleButton = ({ component1, component2 }) => {
  const [isComponent1, setIsComponent1] = useState(true);

  const handleClick = () => {
    setIsComponent1(!isComponent1);
  };

  return (
    <>
      <button
        onClick={handleClick}
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
      >
        {isComponent1 ? "Textbox" : "Recorder"}
      </button>
      {isComponent1 ? component1 : component2}
    </>
  );
};

export default ToggleButton;
