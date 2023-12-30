import React, { useState } from 'react';
import './Header.css';
import DropdownSearchCategory from './Dropdown Search Category';
import DarkModeButton from './DarkModeButton';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleSearch = () => {
    console.log('Hledám:', searchTerm);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <header className={darkMode ? 'dark' : 'light'}>
      <div className="logo">
        <img src="/images/kniver2.png" alt="Logo" />
        <h2 className='logo-text'>CS2Pattern.com</h2>
      </div>
      <div className="categories-wrapper">
        <DropdownSearchCategory />
      </div>
      <div className="search">
        <input
          className='searchskin'
          type="text"
          placeholder="Search through skins.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>
          <img
            src="/images/49116.png"
            alt="Search"
            className='glass'
            style={{ width: '20px', height: '20px' }}
          />
        </button>
      </div>
      <div className='header-last-part'>
        <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="links">
          <a href="/about">About</a>
          <a href="/help">Help</a>
        </div>
      </div>
    </header>
  );
};

export default Header;