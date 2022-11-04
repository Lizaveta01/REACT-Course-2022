import React, { useEffect } from 'react';

import CharList from './CharList';
import Search from '../../components/search/Search';
import { HomePageWrapper, InfoMessage } from './HomePage.styled';
import { IChar, Word } from '../../constants/constants';
import Spinner from '../../components/spinner/Spinner';
import { useMyContext } from '../../context/Context';
import Settings from '../../components/settings/Settings';
import { useHttp } from '../../utils/customHooks';

const HomePage = () => {
  const { loading, request } = useHttp();

  const {
    status,
    species,
    gender,
    search,
    setSearch,
    cards,
    setCards,
    page,
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
  };

  const onRequest = () => {
    getAllCharacters().then(onCharListLoaded);
  };

  async function getAllCharacters() {
    const apiBase = 'https://rickandmortyapi.com/api';
    const res = await request(
      `${apiBase}/character/?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`,
    );
    setCardsNumber(res.info.count);
    return res.results;
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
        <>
          {!!cards.length ? (
            <CharList charList={cards} />
          ) : (
            <InfoMessage>Sorry, this character is not found</InfoMessage>
          )}
        </>
      )}
    </HomePageWrapper>
  );
};

export default HomePage;
