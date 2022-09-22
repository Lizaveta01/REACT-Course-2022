import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from 'components/homePage/HomePage';
import AboutUs from 'components/aboutUs/AboutUs';
import NotFoundPage from 'components/notFoundPage/NotFoundPage';
import { GlobalStyle } from 'styles/global';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <header>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About us</Link>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
