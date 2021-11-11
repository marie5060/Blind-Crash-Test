import React from 'react';
import star from './star.png';
import './Difficulty.css';

const Stars = () => {
  return (
    <button type="button" className="stars-container">
      <img src={star} alt="" />
    </button>
  );
};

export default Stars;
