import React from "react";
import SettingsButton from "../SettingsButton/SettingsButton";
import "./Header.css";
import ToggleButton from "../ToggleButton/ToggleButton";

function Header({ toggleComponent, currentComponent }) {
  return (
    <div className="header">
      <SettingsButton />
      <h1>Voxion</h1>
      <ToggleButton
        toggleComponent={toggleComponent}
        currentComponent={currentComponent}
      />
    </div>
  );
}

export default Header;
