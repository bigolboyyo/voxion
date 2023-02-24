// Import necessary libraries and components
import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import ChatContainer from "./components/ChatContainer/ChatContainer";

import SubmitForm from "./components/SubmitForm/SubmitForm";
import SpeechRecognitionButton from "./components/SpeechRecognitionButton/SpeechRecognitionButton";

function App() {
  // Get current time for timestamping messages
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const synth = useRef(window.speechSynthesis);
  const chatContainerRef = useRef();

  // Define state variables and refs
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const [isFetching, setIsFetching] = useState(false); // new state variable
  const [currentComponent, setCurrentComponent] = useState(true);

  const toggleComponent = () => {
    setCurrentComponent(!currentComponent);
  };

  // Handle input change in the submit form
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // Handle form submission and fetch response from OpenAI
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      user: "human",
      time: currentTime,
    };
    setMessages([...messages, newMessage]);
    setIsFetching(true);
    await fetchOpenAi(inputText);
    setInputText("");
  };

  // Send input text to OpenAI and handle response
  const fetchOpenAi = async (inputText) => {
    const response = await fetch("http://localhost:5000/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: inputText,
        model: "text-davinci-002",
        temperature: 0.7,
        max_tokens: 64,
      }),
    });
    const metadata = await response.json();
    const aIMessage = {
      id: messages.length + 2,
      text: metadata.text,
      user: "openAI",
      time: currentTime,
    };
    setMessages((messages) => [...messages, aIMessage]);
    setIsFetching(false);

    // Use browser's SpeechSynthesis API to read out the AI response
    const utterance = new SpeechSynthesisUtterance(metadata.text);
    synth.current.speak(utterance);
  };

  // Scroll to bottom of chat container when new message is added
  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  // Render the app UI
  return (
    <div className="container">
      {/* Display app header */}
      <Header toggleComponent={toggleComponent} />
      {/* Display chat messages */}
      <ChatContainer chatContainerRef={chatContainerRef} messages={messages} />
      {/* Add waveform animation to indicate bot is speaking */}
      <div className="radio-wave"></div>
      {/* Display form for submitting messages */}
      {currentComponent ? (
        <SpeechRecognitionButton />
      ) : (
        <SubmitForm
          isFetching={isFetching}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

// Export the App component as the default export
export default App;
