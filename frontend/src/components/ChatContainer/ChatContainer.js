import React from "react";

function ChatContainer({ chatContainerRef, messages }) {
  return (
    <div className="chat-container" ref={chatContainerRef}>
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
  );
}

export default ChatContainer;
