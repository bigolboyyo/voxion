import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      user: "bot1",
      time: "12:01 AM",
    },
    {
      id: 2,
      text: "Nullam euismod dolor ut imperdiet iaculis.",
      user: "bot2",
      time: "12:05 AM",
    },
    {
      id: 3,
      text: "Sed at nibh turpis. Ut auctor, nunc vitae interdum blandit, ipsum sapien blandit magna, eu finibus risus quam ut risus.",
      user: "bot1",
      time: "12:10 AM",
    },
  ]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputText); // replace with API call to backend
  };

  return (
    <div className="container">
      <div className="chat-container">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`chat-message ${
              message.user === "bot1" ? "left" : "right"
            }`}
          >
            <div className="chat-message-text">{message.text}</div>
            <div className="chat-message-meta">
              {message.user} - {message.time}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="inputText">Enter your text:</label>
          <textarea
            className="form-control"
            id="inputText"
            rows="3"
            value={inputText}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
