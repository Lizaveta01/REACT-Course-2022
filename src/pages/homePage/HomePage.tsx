import React from 'react';

import CharList from './CharList';
import { Component } from 'react';
import Search from '../../components/search/Search';
import { HomePageWrapper } from './HomePage.styled';


class HomePage extends Component {
  state = {
    reach: '',

  };

  setSearch(value: string) {
    this.setState({ search: value });
  }
  render() {
    const { search } = this.state;
    return (
      <HomePageWrapper>
        <Search search={search} setSearch={(value: string) => this.setSearch(value)} />
        <CharList search={search} charList={}/>
      </HomePageWrapper>
    );
  }
}

export default HomePage;
