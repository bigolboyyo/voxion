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
  const [isFetching, setIsFetching] = useState(false); // new state variable

  const chatContainerRef = useRef();

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const fetchOpenAi = async () => {
    setIsFetching(true); // set isFetching to true when the fetch request starts

    try {
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

      console.log(JSON.stringify(metadata.text));
      const aIMessage = {
        id: messages.length + 1,
        text: metadata.text,
        user: "openAI",
        time: currentTime,
      };

      setMessages([...messages, aIMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsFetching(false); // set isFetching to false when the fetch request is completed
    }
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

    await fetchOpenAi(inputText);

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
        isFetching={isFetching} // pass the isFetching state variable to SubmitForm component
      />
    </div>
  );
}

export default App;
