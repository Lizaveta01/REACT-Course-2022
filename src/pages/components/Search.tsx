/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Component } from 'react';
import { ButtonSearch, FormWrapper, InputSearch } from './Search.styled';

class Search extends Component {
  state = {
    searchValue: `${localStorage.getItem('search')}`,
  };

  componentWillUnmount() {
    console.log('delete');
    localStorage.setItem('search', `${this.state.searchValue}`);
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
