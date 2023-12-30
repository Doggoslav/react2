import React from 'react';
import "./CheckButton.css";

const CheckButton2 = () => {
  const handleButtonClick = () => {
    window.location.href = 'https://cs2pattern.com/favorite';
  };

  return (
    <div className="check-button">
      <button onClick={handleButtonClick}>Check out more...</button>
    </div>
  );
};

export default CheckButton2;