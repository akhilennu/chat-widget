// src/ChatWindow.js
import React, { useState } from 'react';
import MessageFactory from '../../../utils/MessageFactory';
import './ChatWindow.css';

const ChatWindow = ({ closeChatWindow }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, sender: 'user', messageType: 'text' }];
      setMessages(newMessages);
      setInput('');

      // Check for specific message and respond
      if (input.trim().toLowerCase() === 'message') {
        setTimeout(() => {
          setMessages(prevMessages => [
            ...prevMessages,
            { text: 'message received', sender: 'bot', messageType: 'text' }
          ]);
        }, 500); // Simulate a slight delay
      } else if (input.trim().toLowerCase() === 'card') {
        setTimeout(() => {
          setMessages(prevMessages => [
            ...prevMessages,
            { text: 'Sample card content', sender: 'bot', messageType: 'card' }
          ]);
        }, 500); // Simulate a slight delay
      } else if (input.trim().toLowerCase() === 'carousel') {
        setTimeout(() => {
          setMessages(prevMessages => [
            ...prevMessages,
            {
              items: [
                { title: 'Item 1', description: 'Description 1' },
                { title: 'Item 2', description: 'Description 2' },
                { title: 'Item 3', description: 'Description 3' }
              ],
              sender: 'bot',
              messageType: 'carousel'
            }
          ]);
        }, 500); // Simulate a slight delay
      }
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <h3>Chat</h3>
        <button className="close-button" onClick={closeChatWindow}>×</button>
      </div>
      <div className="chat-body">
        {messages.map((message, index) => (
          <MessageFactory key={index} message={message} />
        ))}
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
