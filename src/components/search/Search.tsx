import React, { Component } from 'react';
import { Word } from '../../constants/constants';

import { ButtonSearch, FormWrapper, InputSearch } from './Search.styled';

class Search extends Component {
  state = {
    searchValue: `${localStorage.getItem(Word.SEARCH)}`,
  };

  componentWillUnmount() {
    localStorage.setItem(Word.SEARCH, `${this.state.searchValue}`);
  }

  render() {
    return (
      <FormWrapper>
        <InputSearch
          type="search"
          autoComplete="off"
          autoFocus
          value={this.state.searchValue}
          placeholder="Search..."
          onChange={(e) => this.setState({ searchValue: e.target.value })}
        />
        <ButtonSearch type="submit" />
      </FormWrapper>
    );
  }
}

export default Search;
