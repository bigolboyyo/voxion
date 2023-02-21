import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import ChatContainer from "./components/ChatContainer/ChatContainer";
import SubmitForm from "./components/SubmitForm/SubmitForm";
import { seedMsgs } from "./TempSeed/Messages";

function App() {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState(seedMsgs);

  const chatContainerRef = useRef();

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      user: "human",
      time: currentTime,
    };
    setMessages([...messages, newMessage]);
    setInputText("");
  };

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="container">
      <Header />
      <ChatContainer chatContainerRef={chatContainerRef} messages={messages} />

      <div className="radio-wave"></div>

      <SubmitForm
        handleSubmit={handleSubmit}
        inputText={inputText}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}

export default App;
