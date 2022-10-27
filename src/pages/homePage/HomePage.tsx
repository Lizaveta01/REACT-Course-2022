import React, { useEffect, useState } from 'react';

import CharList from './CharList';

import Search from '../../components/search/Search';
import { HomePageWrapper } from './HomePage.styled';
import { IChar, Word } from '../../constants/constants';
import Spinner from '../../components/spinner/Spinner';
import { getAllCharacters } from '../../service/CharService';

const HomePage = () => {
  const [search, setSearch] = useState(localStorage.getItem(Word.SEARCH) || '');
  const [charList, setCharList] = useState<IChar[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const initSearch = () => {
    onRequest();
  };
  useEffect(() => {
    initSearch();
    return () => {
      localStorage.setItem(Word.SEARCH, `${search}`);
    };
  }, []);

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
    getAllCharacters(page, search).then(onCharListLoaded).catch(onError);
  };

  // const setCards = (cards: IChar[]) => {
  //   setCharList(cards);
  // };

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
