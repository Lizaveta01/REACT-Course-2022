import React from 'react';

import { ButtonSearch, FormWrapper, InputSearch } from './Search.styled';

type Props = {
  search: string;
  setSearch: (searchStr: string) => void;
};

export const Search = ({ search, setSearch }: Props) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch((e.target as HTMLInputElement).value);
  };

  return (
    <FormWrapper>
      <InputSearch
        type="search"
        autoComplete="off"
        autoFocus
        value={search}
        placeholder="Search..."
        onChange={handleChange}
      />
      <ButtonSearch type="submit" />
    </FormWrapper>
  );
};

export default Search;
