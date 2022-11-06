import React from 'react';
import { Cards, Interval, Word } from '../../constants/constants';
import { useDispatch, useSelector } from 'react-redux';

import { SelectContainer, Container, Label } from './Filter.styled';
import {
  setCardsCountInPage,
  setCurrentPage,
  setGender,
  setInterval,
  setPage,
  setSpecies,
  setStatus,
} from '../../actions/actions';
import { IReducerState } from '../../reducer/Reducer';
import { generateKey } from '../../utils/usefullFunctions';

const Filter = () => {
  const dispatch = useDispatch();
  const gender = useSelector((state: IReducerState) => state.gender);
  const status = useSelector((state: IReducerState) => state.status);
  const species = useSelector((state: IReducerState) => state.species);

  const countCardInPage = useSelector((state: IReducerState) => state.countCardInPage);

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
    dispatch(setInterval(period));
  }

  return (
    <Container>
      {params.map((item) => {
        return (
          <SelectContainer key={generateKey(item.lable)}>
            <Label>{item.lable}</Label>
            <select
              defaultValue={item.defaultValue}
              onChange={(e) => setOption(e.target.value, item.lable)}
            >
              <option key={-1} value="">
                Select {item.lable}
              </option>
              {item.option!.map((option: string | number, index: number) => (
                <option key={generateKey(index)}>{option}</option>
              ))}
            </select>
          </SelectContainer>
        );
      })}
    </Container>
  );
};

export default Filter;
