import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../homePage/HomePage';
import AboutUs from '../aboutPage/AboutPage';
import NotFoundPage from '../notFoundPage/NotFoundPage';
import { GlobalStyle } from '../../styles/global';
import Header from '../components/header/Header';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
