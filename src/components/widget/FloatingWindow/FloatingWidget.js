// src/FloatingWidget.js
import React, { useState } from 'react';
import ChatWindow from '../ChatWindow/ChatWindow';
import './FloatingWidget.css';

const FloatingWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatWindow = () => {
    setIsOpen(!isOpen);
  };

  const closeChatWindow = () => {
    setIsOpen(false);
  };

  return (
    <div className="floating-widget">
      {!isOpen && (
        <button className="chat-button" onClick={toggleChatWindow}>
          Chat
        </button>
      )}
      {isOpen && <ChatWindow closeChatWindow={closeChatWindow} />}
    </div>
  );
};

export default FloatingWidget;
