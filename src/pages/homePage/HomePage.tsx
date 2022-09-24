import React from 'react';
import CharList from './CharList';
import { Component } from 'react';
import Search from '../components/Search';
import { HomePageWrapper } from './HomePage.styled';

class HomePage extends Component {
  render() {
    return (
      <HomePageWrapper>
        <Search />
        <CharList />
      </HomePageWrapper>
    );
  }
}

export default HomePage;
