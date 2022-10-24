import React, { Component } from 'react';

import { ButtonSearch, FormWrapper, InputSearch } from './Search.styled';

class Search extends Component<IProps> {
  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { setSearch } = this.props;

    setSearch((e.target as HTMLInputElement).value);
  };

  render() {
    const { search, handleKeyDown } = this.props;

    return (
      <FormWrapper>
        <InputSearch
          type="search"
          autoComplete="off"
          autoFocus
          value={search}
          placeholder="Search..."
          onChange={this.handleChange}
          onKeyUp={handleKeyDown}
        />
        <ButtonSearch type="submit" />
      </FormWrapper>
    );
  }
}

export default Search;

export interface IProps {
  search: string;
  setSearch: (searchStr: string) => void;
  handleKeyDown: (event: React.KeyboardEvent) => void;
}
