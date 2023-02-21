import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import ChatContainer from "./components/ChatContainer/ChatContainer";
import SubmitForm from "./components/SubmitForm/SubmitForm";

function App() {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "bot1",
      text: "Welcome to the Phone Center! How can we assist you today?",
      time: currentTime,
    },
    {
      id: 2,
      user: "bot2",
      text: "Hi, I have a problem with my phone line.",
      time: currentTime,
    },
    {
      id: 3,
      user: "bot1",
      text: "Sure, what seems to be the problem?",
      time: currentTime,
    },
    {
      id: 4,
      user: "bot2",
      text: "I can't seem to get a dial tone, and there's a strange buzzing sound on the line.",
      time: currentTime,
    },
    {
      id: 5,
      user: "bot1",
      text: "Oh, that doesn't sound good. Let's try some troubleshooting steps.",
      time: currentTime,
    },
    {
      id: 6,
      user: "bot1",
      text: "First, can you try unplugging the phone from the wall and plugging it back in?",
      time: currentTime,
    },
    {
      id: 7,
      user: "bot2",
      text: "I've already tried that, and it didn't help.",
      time: currentTime,
    },
    {
      id: 8,
      user: "bot1",
      text: "Okay, next let me check if there are any reported outages in your area.",
      time: currentTime,
    },
    {
      id: 9,
      user: "bot1",
      text: "Can you please provide your phone number so I can check our system?",
      time: currentTime,
    },
    {
      id: 10,
      user: "bot2",
      text: "Sure, it is 555-555-1234.",
      time: currentTime,
    },
    {
      id: 11,
      user: "bot1",
      text: "Thank you. It looks like there is an outage in your area affecting phone service. Our technicians are aware of the issue and are working to resolve it.",
      time: currentTime,
    },
    {
      id: 12,
      user: "bot2",
      text: "How long will it take to fix?",
      time: currentTime,
    },
    {
      id: 13,
      user: "bot1",
      text: "We estimate that service will be restored within the next 2 hours. In the meantime, please try to keep your phone line clear as our technicians work to resolve the issue.",
      time: currentTime,
    },
    {
      id: 14,
      user: "bot1",
      text: "That sounds pretty intense. Do you have a lot of calls coming in?",
      time: currentTime,
    },
    {
      id: 15,
      user: "bot2",
      text: "Yeah, we get quite a few calls. Most of them are people looking for missing loved ones or trying to find a safe place to stay. It can be tough, but it feels good to be able to help them.",
      time: currentTime,
    },
    {
      id: 16,
      user: "bot1",
      text: "I can imagine. How do you handle all the stress?",
      time: currentTime,
    },
    {
      id: 17,
      user: "bot2",
      text: "Honestly, I try to stay focused on helping the people who call in. It can be overwhelming at times, but knowing that we're making a difference makes it all worthwhile.",
      time: currentTime,
    },
    {
      id: 18,
      user: "bot1",
      text: "That's a good attitude to have. Keep up the good work!",
      time: currentTime,
    },
    {
      id: 19,
      user: "bot2",
      text: "Thanks, will do! Take care.",
      time: currentTime,
    },
    {
      id: 20,
      user: "bot1",
      text: "You too. Bye!",
      time: currentTime,
    },
  ]);

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
