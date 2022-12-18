import React, { useEffect } from 'react';

import CharList from './CharList';
import Search from '../../components/search/Search';
import { HomePageWrapper, InfoMessage } from './HomePage.styled';
import Spinner from '../../components/spinner/Spinner';
import Settings from '../../components/settings/Settings';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setSearch } from '../../store/slices/filterSlice';
import { fetchCards } from '../../store/actions/actions';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { cards, search, gender, status, species, page, countCardInPage, isError, isLoading } =
    useAppSelector((state) => {
      return {
        cards: state.fetch_data.cards,
        search: state.filter.search,
        gender: state.filter.gender,
        status: state.filter.status,
        species: state.filter.species,
        page: state.filter.page,
        countCardInPage: state.filter.countCardInPage,
        isLoading: state.fetch_data.isLoading,
        isError: state.fetch_data.isError,
      };
    });

  useEffect(() => {
    const apiBase = 'https://rickandmortyapi.com/api';
    const res = `${apiBase}/character/?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
    const url = res;
    dispatch(fetchCards(url));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, status, species, gender, countCardInPage, search]);

  const changeSearch = (searchValue: string) => {
    dispatch(setSearch(searchValue));
  };

  return (
    <HomePageWrapper>
      <Search search={search} setSearch={(value: string) => changeSearch(value)} />
      <Settings />
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <InfoMessage>Loading Error</InfoMessage>
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
