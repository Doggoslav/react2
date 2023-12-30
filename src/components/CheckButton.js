import React from 'react';
import './CheckButton.css';

const CheckButton = () => {
  const handleButtonClick = () => {
    window.location.href = 'https://cs2pattern.com/latest';
  };

  return (
    <div className="check-button">
      <button onClick={handleButtonClick}>Check out more...</button>
    </div>
  );
};

export default CheckButton;
