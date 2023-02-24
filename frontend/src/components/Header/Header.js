import React from "react";
import ThemeButton from "../ThemeButton/ThemeButton";
import "./Header.css";
import ToggleButton from "../ToggleButton/ToggleButton";

function Header({ toggleComponent }) {
  return (
    <div className="header">
      <ThemeButton />
      <h1>Voxion</h1>
      <ToggleButton toggleComponent={toggleComponent} />
    </div>
  );
}

export default Header;
