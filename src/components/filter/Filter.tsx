import React from 'react';
import { Cards, Interval, Word } from '../../constants/constants';

import { SelectContainer, Container, Label } from './Filter.styled';
import {
  setCardsCountInPage,
  setCurrentPage,
  setGender,
  setCardInterval,
  setPage,
  setSpecies,
  setStatus,
} from '../../store/slices/filterSlice';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

const Filter = () => {
  const dispatch = useAppDispatch();
  const { gender, status, species, countCardInPage } = useAppSelector((state) => {
    return {
      gender: state.filter.gender,
      status: state.filter.status,
      species: state.filter.species,
      countCardInPage: state.filter.countCardInPage,
    };
  });

  const params = [
    {
      lable: 'Species',
      option: ['alien', 'human', 'humanoid', 'unknown'],
      defaultValue: species,
    },
    {
      lable: 'Status',
      option: ['alive', 'dead', 'unknow'],
      defaultValue: status,
    },
    {
      lable: 'Gender',
      option: ['male', 'female', 'unknown', 'genderless'],
      defaultValue: gender,
    },
    {
      lable: 'Count cards',
      option: [4, 10, 20],
      defaultValue: countCardInPage,
    },
  ];

  const setOption = (option: string, funcType: string) => {
    switch (funcType) {
      case Word.SPECIES:
        return dispatch(setSpecies(option));
      case Word.STATUS:
        return dispatch(setStatus(option));
      case Word.GENDER:
        return dispatch(setGender(option));
      case Word.COUNT_CARDS:
        return setIntervalValue(+option);
    }
  };

  function setIntervalValue(option: number) {
    const period = {
      start: Interval.DEFAULT,
      end: Cards.COUNT_20,
    };
    switch (option) {
      case Cards.COUNT_4:
        period.end = Cards.COUNT_4;
        break;
      case Cards.COUNT_10:
        period.end = Cards.COUNT_10;
        break;
      default:
        period.end = Cards.COUNT_20;
        break;
    }
    dispatch(setCardsCountInPage(+option));
    dispatch(setCurrentPage(Cards.DEFAULT_PAGE_1));
    dispatch(setPage(Cards.DEFAULT_PAGE_1));
    dispatch(setCardInterval(period));
  }

  return (
    <Container>
      {params.map((item) => {
        return (
          <SelectContainer key={item.lable}>
            <Label>{item.lable}</Label>
            <select
              defaultValue={item.defaultValue}
              onChange={(e) => setOption(e.target.value, item.lable)}
            >
              <option key={-1} value="">
                Select {item.lable}
              </option>
              {item.option!.map((option: string | number, index: number) => (
                <option key={index}>{option}</option>
              ))}
            </select>
          </SelectContainer>
        );
      })}
    </Container>
  );
};

export default Filter;
