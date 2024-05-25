// src/CarouselMessage.js
import React from 'react';
import './CarouselMessage.css';

const CarouselMessage = ({ items }) => {
  return (
    <div className="chat-message carousel">
      <div className="carousel-container">
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselMessage;
