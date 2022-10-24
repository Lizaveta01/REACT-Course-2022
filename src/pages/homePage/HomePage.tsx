import React from 'react';

import CharList from './CharList';
import { Component } from 'react';
import Search from '../../components/search/Search';
import { HomePageWrapper } from './HomePage.styled';
import { IChar, Word } from '../../constants/constants';
import Spinner from '../../components/spinner/Spinner';
import CharService from '../../service/CharService';

class HomePage extends Component {
  state = {
    search: localStorage.getItem(Word.SEARCH) || '',
    charList: [],
    loading: true,
    error: false,
    page: 1,
  };

  charService = new CharService();

  initSearch() {
    this.onRequest();
  }
  componentDidMount() {
    this.initSearch();
  }
  componentWillUnmount() {
    localStorage.setItem(Word.SEARCH, `${this.state.search}`);
  }

  changeSearch(searchValue: string) {
    this.setState({ search: searchValue });
  }

  onCharListLoaded = (newCharList: IChar[]) => {
    this.setState({ charList: newCharList, loading: false });
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  onRequest = () => {
    console.log(this.state.search);
    this.charService
      .getAllCharacters(this.state.page, this.state.search)
      .then(this.onCharListLoaded)
      .catch(this.onError);
  };

  setCards(cards: IChar[]) {
    this.setState({ charList: cards });
  }

  handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === Word.ENTER) {
      this.onRequest();
    }
  };

  render() {
    const { search, charList, loading } = this.state;
    return (
      <HomePageWrapper>
        <Search
          search={search}
          setSearch={(value: string) => this.changeSearch(value)}
          handleKeyDown={this.handleKeyDown}
        />
        {loading ? (
          <Spinner />
        ) : (
          <>
            {!!charList.length ? (
              <CharList charList={charList} />
            ) : (
              <p> Sorry, this character is not found</p>
            )}
          </>
        )}
      </HomePageWrapper>
    );
  }
}

export default HomePage;
