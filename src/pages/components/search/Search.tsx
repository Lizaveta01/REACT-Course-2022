import React, { Component } from 'react';
import { Words } from '../../../constants/Interfaces';

import { ButtonSearch, FormWrapper, InputSearch } from './Search.styled';

class Search extends Component {
  state = {
    searchValue: `${localStorage.getItem(Words.SEARCH)}`,
  };

  componentWillUnmount() {
    localStorage.setItem(Words.SEARCH, `${this.state.searchValue}`);
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
