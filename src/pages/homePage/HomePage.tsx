import React, { useEffect, useState } from 'react';

import CharList from './CharList';
import Search from '../../components/search/Search';
import { HomePageWrapper } from './HomePage.styled';
import { IChar, Word } from '../../constants/constants';
import Spinner from '../../components/spinner/Spinner';
import { getAllCharacters } from '../../service/CharService';
import Filter from '../../components/filter/Filter';
import { useMyContext } from '../../context/Context';

const HomePage = () => {
  const [search, setSearch] = useState(localStorage.getItem(Word.SEARCH) || '');
  const [charList, setCharList] = useState<IChar[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const { status, species, gender } = useMyContext();

  const initSearch = () => {
    onRequest();
  };

  useEffect(() => {
    initSearch();
  }, [status, species, gender]);

  useEffect(() => {
    localStorage.setItem(Word.SEARCH, `${search}`);
  });

  const changeSearch = (searchValue: string) => {
    setSearch(searchValue);
  };

  const onCharListLoaded = (newCharList: IChar[]) => {
    setCharList(newCharList);
    setLoading(false);
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  const onRequest = () => {
    getAllCharacters(page, search, status, gender, species).then(onCharListLoaded).catch(onError);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === Word.ENTER) {
      onRequest();
    }
  };

  return (
    <HomePageWrapper>
      <Search
        search={search}
        setSearch={(value: string) => changeSearch(value)}
        handleKeyDown={handleKeyDown}
      />
      <Filter />
      {loading ? (
        <Spinner />
      ) : (
        <>
          {!!charList.length ? (
            <CharList charList={charList} />
          ) : (
            <p>Sorry, this character is not found</p>
          )}
        </>
      )}
    </HomePageWrapper>
  );
};

export default HomePage;
