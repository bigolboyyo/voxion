// Import necessary libraries and components
import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ChatContainer from "./components/ChatContainer/ChatContainer";
import SubmitForm from "./components/SubmitForm/SubmitForm";
import SpeechRecognitionButton from "./components/SpeechRecognitionButton/SpeechRecognitionButton";

function App() {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const synth = useRef(window.speechSynthesis);
  const chatContainerRef = useRef();

  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const [isFetching, setIsFetching] = useState(false); // new state variable
  const [currentComponent, setCurrentComponent] = useState(true);

  const toggleComponent = () => {
    setCurrentComponent(!currentComponent);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

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

    const utterance = new SpeechSynthesisUtterance(metadata.text);
    synth.current.speak(utterance);
  };

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="container">
      <Header
        toggleComponent={toggleComponent}
        currentComponent={currentComponent}
      />
      <ChatContainer chatContainerRef={chatContainerRef} messages={messages} />
      <div className="radio-wave"></div>
      {currentComponent ? (
        <SpeechRecognitionButton
          fetchOpenAi={fetchOpenAi}
          messages={messages}
          setMessages={setMessages}
          time={currentTime}
        />
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

export default App;
