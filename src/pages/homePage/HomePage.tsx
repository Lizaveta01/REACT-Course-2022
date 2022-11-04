import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CharList from './CharList';
import Search from '../../components/search/Search';
import { HomePageWrapper, InfoMessage } from './HomePage.styled';
import Spinner from '../../components/spinner/Spinner';
import Settings from '../../components/settings/Settings';
import { fetchCards, setSearch } from '../../actions/actions';
import { IReducerState } from '../../reducer/Reducer';
import { AppDispatch } from '../../reducer/Store';

const HomePage = () => {
  const loadingStatus = useSelector((state: IReducerState) => state.loadingStatus);
  const cards = useSelector((state: IReducerState) => state.cards);
  const search = useSelector((state: IReducerState) => state.search);
  const gender = useSelector((state: IReducerState) => state.gender);
  const status = useSelector((state: IReducerState) => state.status);
  const species = useSelector((state: IReducerState) => state.species);
  const page = useSelector((state: IReducerState) => state.page);
  const countCardInPage = useSelector((state: IReducerState) => state.countCardInPage);
  const dispatch: AppDispatch = useDispatch();

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
      {loadingStatus === 'loading' ? (
        <Spinner />
      ) : loadingStatus === 'error' ? (
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
