import React, { useState } from "react";

const SpeechRecognitionButton = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [recognitionResult, setRecognitionResult] = useState(null);

  const recognition = new window.webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onstart = () => {
    setIsRecording(true);
  };

  recognition.onend = () => {
    setIsRecording(false);
    setShowModal(true);
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    setTranscript(transcript);
    setRecognitionResult(event.results);
  };

  const handleDelete = () => {
    setTranscript("");
    setShowModal(false);
  };

  const handleReplay = () => {
    if (recognitionResult) {
      const utterance = new window.SpeechSynthesisUtterance();
      utterance.text = recognitionResult[0][0].transcript;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSend = () => {
    console.log(transcript);
    // send the transcript to the backend
    setTranscript("");
    setShowModal(false);
  };

  const handleClick = () => {
    if (isRecording) {
      recognition.stop();
    } else {
      recognition.start();
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          backgroundColor: isRecording ? "red" : "gray",
          border: "none",
          outline: "none",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
          cursor: "pointer",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          style={{ width: "32px", height: "32px", fill: "white" }}
        >
          <path d="M12 15.5a3.5 3.5 0 0 1-3.5-3.5v-7a3.5 3.5 0 1 1 7 0v7a3.5 3.5 0 0 1-3.5 3.5zM12 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        </svg>
      </button>
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              width: "50%",
              margin: "2rem",
            }}
          >
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleReplay}>Replay</button>
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default SpeechRecognitionButton;
