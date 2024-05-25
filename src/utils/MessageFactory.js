// src/MessageFactory.js
import React from 'react';
import Message from '../components/MessageTypes/Message/Message';
import CardMessage from '../components/MessageTypes/CardMessage/CardMessage';
import CarouselMessage from '../components/MessageTypes/CarouselMessage/CarouselMessage';

const MessageFactory = ({ message }) => {
  switch (message.messageType) {
    case 'card':
      return <CardMessage text={message.text} />;
    case 'carousel':
      return <CarouselMessage items={message.items} />;
    default:
      return <Message text={message.text} sender={message.sender} />;
  }
};

export default MessageFactory;
