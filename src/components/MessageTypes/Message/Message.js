// src/Message.js
import React from 'react';
import './Message.css';

const Message = ({ text, sender }) => {
  return (
    <div className={`chat-message ${sender}`}>
      {text}
    </div>
  );
};

export default Message;
