import React, { Component } from 'react';

import { ButtonSearch, FormWrapper, InputSearch } from './Search.styled';

class Search extends Component<IProps> {
  initSearch() {
    if (localStorage.getItem('search') as string) {
      const search = localStorage.getItem('search') as string;
      this.props.setSearch(search);
    }
  }

  componentDiDMount() {
    this.initSearch();
  }

  componentWillUnmount() {
    localStorage.setItem('search', `${this.props.search}`);
  }

  handleChange(e: React.FormEvent<HTMLInputElement>) {
    const { setSearch } = this.props;

    setSearch((e.target as HTMLInputElement).value);
    this.setState((e.target as HTMLInputElement).value);
  }

  handleSubmit(){
    if
  }



  render() {
    const { search } = this.props;

    return (
      <FormWrapper>
        <InputSearch
          type="search"
          autoComplete="off"
          autoFocus
          value={search}
          placeholder="Search..."
          onChange={this.handleChange}
        />
        <ButtonSearch type="submit" onSubmit={this.handleSubmit}/>
      </FormWrapper>
    );
  }
}

export default Search;

export interface IProps {
  search: string;
  setSearch: (searchStr: string) => void;
}
