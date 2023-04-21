import React from "react";

const SettingsButton = () => {
  return (
    <button
      // onClick={toggleSettings}
      style={{
        backgroundColor: "#F8F8F8",
        color: "#1E1E1E",
        border: "none",
        padding: "10px 16px",
        borderRadius: "20px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
        cursor: "pointer",
        width: "calc(100vw - 95%)",
      }}
    >
      Settings
    </button>
  );
};

export default SettingsButton;
