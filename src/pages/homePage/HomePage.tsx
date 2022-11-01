import React, { useEffect, useState } from 'react';

import CharList from './CharList';
import Search from '../../components/search/Search';
import { HomePageWrapper } from './HomePage.styled';
import { IChar, Word } from '../../constants/constants';
import Spinner from '../../components/spinner/Spinner';
import { useMyContext } from '../../context/Context';
import Settings from '../../components/settings/Settings';
import axios from 'axios';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const {
    status,
    species,
    gender,
    search,
    setSearch,
    cards,
    setCards,
    page,
    setPage,
    setCurrentPage,
    setCardsNumber,
    countCardInPage,
  } = useMyContext();

  const initSearch = () => {
    onRequest();
  };

  useEffect(() => {
    initSearch();
  }, [page, status, species, gender, countCardInPage]);

  const changeSearch = (searchValue: string) => {
    setSearch(searchValue);
  };

  const onCharListLoaded = (newCharList: IChar[]) => {
    setCards(newCharList);
    setLoading(false);
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  const onRequest = () => {
    getAllCharacters().then(onCharListLoaded).catch(onError);
  };

  async function getAllCharacters() {
    const apiBase = 'https://rickandmortyapi.com/api';
    const res = await getResourse(
      `${apiBase}/character/?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`,
    );
    // setPage(1);
    // setCurrentPage(1);
    return res;
  }

  async function getResourse(url: string) {
    const res = await axios.get(url);
    setCardsNumber(res.data.info.count);
    return await res.data.results;
  }

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
      <Settings />
      {loading ? (
        <Spinner />
      ) : (
        <>{!!cards.length ? <CharList /> : <p>Sorry, this character is not found</p>}</>
      )}
    </HomePageWrapper>
  );
};

export default HomePage;
