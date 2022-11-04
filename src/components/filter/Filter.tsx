import React from 'react';
import { Cards, Interval, Word } from '../../constants/constants';
import { useDispatch, useSelector } from 'react-redux';

import { SelectContainer, Container, Label } from './Filter.styled';
import {
  setCardsCountInPage,
  setCurrentPage,
  setGender,
  setIntervalEnd,
  setIntervalStart,
  setPage,
  setSpecies,
  setStatus,
} from '../../actions/actions';
import { IReducerState } from '../../reducer/Reducer';

const Filter = () => {
  const dispatch = useDispatch();
  const gender = useSelector((state: IReducerState) => state.gender);
  const status = useSelector((state: IReducerState) => state.status);
  const species = useSelector((state: IReducerState) => state.species);

  const countCardInPage = useSelector((state: IReducerState) => state.countCardInPage);

  const params = [
    {
      id: 124,
      lable: 'Species',
      option: ['alien', 'human', 'humanoid', 'unknown'],
      defaultValue: species,
    },
    {
      id: 125,
      lable: 'Status',
      option: ['alive', 'dead', 'unknow'],
      defaultValue: status,
    },
    {
      id: 126,
      lable: 'Gender',
      option: ['male', 'female', 'unknown', 'genderless'],
      defaultValue: gender,
    },
    {
      id: 127,
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
        return setInterval(+option);
    }
  };

  function setInterval(option: number) {
    switch (option) {
      case Cards.COUNT_4:
        dispatch(setIntervalEnd(Cards.COUNT_4));
        break;
      case Cards.COUNT_10:
        dispatch(setIntervalEnd(Cards.COUNT_10));
        break;
      default:
        dispatch(setIntervalEnd(Cards.COUNT_20));
    }
    dispatch(setCurrentPage(Cards.DEFAULT_PAGE_1));
    dispatch(setPage(Cards.DEFAULT_PAGE_1));
    dispatch(setIntervalStart(Interval.DEFAULT));
    dispatch(setCardsCountInPage(+option));
  }

  return (
    <Container>
      {params.map((item) => {
        return (
          <SelectContainer key={item.id}>
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
