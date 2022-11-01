import React from 'react';
import Filter from '../filter/Filter';
import PaginationComponent from '../pagination/Pagination';
import { Container } from './Settings.styled';

const Settings = () => {
  return (
    <Container>
      <Filter />
      <PaginationComponent />
    </Container>
  );
};

export default Settings;
