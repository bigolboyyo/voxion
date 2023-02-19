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
    {
      id: 4,
      text: "Duis congue, est vel vestibulum sollicitudin, neque elit convallis massa, quis commodo dui nibh in justo.",
      user: "bot2",
      time: "12:15 AM",
    },
    {
      id: 5,
      text: "Donec interdum, magna at tristique blandit, velit ex rutrum mauris, eu consequat tortor nulla eget nibh.",
      user: "bot1",
      time: "12:20 AM",
    },
    {
      id: 6,
      text: "Fusce dictum tortor enim, in placerat sem maximus vel.",
      user: "bot2",
      time: "12:25 AM",
    },
    {
      id: 7,
      text: "Phasellus ut diam ligula. Mauris lobortis nibh eu efficitur feugiat.",
      user: "bot1",
      time: "12:30 AM",
    },
    // {
    //   id: 8,
    //   text: "Proin ac risus quis metus gravida interdum vel at odio.",
    //   user: "bot2",
    //   time: "12:35 AM",
    // },
    // {
    //   id: 9,
    //   text: "Vestibulum vel leo eget enim euismod venenatis in non nulla.",
    //   user: "bot1",
    //   time: "12:40 AM",
    // },
    // {
    //   id: 10,
    //   text: "Nam dignissim elit eu suscipit dignissim. Nam ac hendrerit ex, vel ullamcorper dolor.",
    //   user: "bot2",
    //   time: "12:45 AM",
    // },
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
      <h1>Voxion</h1>
      <p>A text-to-speech communications tool that interacts with ChatGPT.</p>
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
