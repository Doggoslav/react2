import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeaderMenu from './components/HeaderMenu';
import Subpage from './Subpage';

const Sablona = () => {
  return (
    <div className="whole-app">
      <div className="web-layout">
        <div className="left-column">
          <p></p>
        </div>
        <div className="app">
          <Header />
          <div className="all-content">
            <div className="main-content">
              <HeaderMenu />
              <Routes>
                <Route path="/" element={<Subpage />} />
              </Routes>
            </div>
          </div>
        </div>
        <div className="right-column">
          <p></p>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Sablona;
