
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sablona from './sablona';
import Header from './components/Header';
import Footer from './components/Footer';
import HeaderMenu from './components/HeaderMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RecentlyAdded from './components/RecentlyAdded';
import BarOpener from './components/BarOpener';
import CheckButton from './components/CheckButton';
import CheckButton2 from './components/CheckButton2';
import MostFavorite from './components/MostFavorite';
import CarouselPictures from './components/CarouselPictures';
import Article from './components/Article';
import ArticleFavorite from './components/ArticleFavorite';

const React2 = () => {
  return (
    <Router>
      <div className="whole-app">
        <Routes>
          <Route path="/sablona" element={<Sablona />} />
          <Route
            path="/"
            element={
              <>
                <div className="web-layout">
                  <div className="left-column">
                    <p></p>
                  </div>
                  <div className="app">
                    <Header />
                    <div className="main-content">
                      <HeaderMenu />
                      <BarOpener />
                      <CarouselPictures />
                      <RecentlyAdded />
                      <Article />
                      <CheckButton />
                      <hr />
                      <MostFavorite />
                      <ArticleFavorite />
                      <CheckButton2 />
                    </div>
                  </div>
                  <div className="right-column">
                    <p></p>
                  </div>
                </div>
              </>
            }
          />
        </Routes>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default React2;
