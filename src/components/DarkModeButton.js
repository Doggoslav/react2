import React from 'react';
import "./DarkModeButton.css"

const DarkModeButton = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className={`dark-mode-toggle ${darkMode ? 'dark' : 'light'}`}>
      <label className="switch">
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} className='clickerdarkmode'/>
        <span className="slider round"></span>
      </label>
      <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
    </div>
  );
};

export default DarkModeButton;