import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/homePage/HomePage';
import AboutUs from '../pages/aboutPage/AboutPage';
import FormPage from '../pages/formPage/FormPage';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';
import { GlobalStyle } from '../styles/global';
import Header from '../components/header/Header';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
