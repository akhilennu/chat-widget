// src/CardMessage.js
import React from 'react';
import './CardMessage.css';

const CardMessage = ({ text }) => {
  return (
    <div className="chat-message card">
      <div className="card">
        <h4>Sample Card</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CardMessage;
