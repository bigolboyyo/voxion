import React from "react";
import ThemeButton from "../ThemeButton/ThemeButton";
import "./Header.css";
import ToggleButton from "../ToggleButton/ToggleButton";
import SubmitForm from "../SubmitForm/SubmitForm";
import SpeechRecognitionButton from "../SpeechRecognitionButton/SpeechRecognitionButton";

function Header() {
  return (
    <div className="header">
      <ThemeButton />
      <h1>Voxion</h1>
      <ToggleButton
        textBox={<SubmitForm />}
        recorder={<SpeechRecognitionButton />}
      />
    </div>
  );
}

export default Header;
