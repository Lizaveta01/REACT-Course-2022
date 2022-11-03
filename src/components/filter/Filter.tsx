import React from 'react';
import { Cards, Interval, Word } from '../../constants/constants';

import { useMyContext } from '../../context/Context';
import { SelectContainer, Container, Label } from './Filter.styled';

const Filter = () => {
  const {
    status,
    species,
    gender,
    setStatus,
    setSpecies,
    setGender,
    countCardInPage,
    setCountCards,
    setLastIndex,
    setFirstIndex,
    setCurrentPage,
    setPage,
  } = useMyContext();

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
        return setSpecies(option);
      case Word.STATUS:
        return setStatus(option);
      case Word.GENDER:
        return setGender(option);
      case Word.COUNT_CARDS:
        return setInterval(+option);
    }
  };

  function setInterval(option: number) {
    switch (option) {
      case Cards.COUNT_4:
        setLastIndex(Cards.COUNT_4);
        break;
      case Cards.COUNT_10:
        setLastIndex(Cards.COUNT_10);
        break;
      default:
        setLastIndex(Cards.COUNT_20);
    }
    setCurrentPage(Cards.DEFAULT_PAGE_1);
    setPage(Cards.DEFAULT_PAGE_1);
    setFirstIndex(Interval.DEFAULT);
    setCountCards(+option);
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
