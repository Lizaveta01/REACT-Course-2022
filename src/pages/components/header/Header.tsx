import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderWrapper } from './Header.styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About us</Link>
    </HeaderWrapper>
  );
};

export default Header;
