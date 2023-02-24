import React, { useState } from "react";

const ThemeButton = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleClick = () => {
    setIsDarkTheme(!isDarkTheme);
    // You can add code here to change the theme of your app based on the isDarkTheme state
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: isDarkTheme ? "#1E1E1E" : "#F8F8F8",
        color: isDarkTheme ? "#F8F8F8" : "#1E1E1E",
        border: "none",
        padding: "10px 16px",
        borderRadius: "20px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
        cursor: "pointer",
        width: "6%",
      }}
    >
      {isDarkTheme ? "Dark" : "Light"} Theme
    </button>
  );
};

export default ThemeButton;
