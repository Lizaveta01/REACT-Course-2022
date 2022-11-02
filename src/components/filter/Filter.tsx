import React from 'react';

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
      case 'Species':
        return setSpecies(option);
      case 'Status':
        return setStatus(option);
      case 'Gender':
        return setGender(option);
      case 'Count cards':
        return setInterval(+option);
    }
  };

  function setInterval(option: number) {
    switch (option) {
      case 4:
        setLastIndex(4);
        setFirstIndex(0);
        setCurrentPage(1);
        setPage(1);
        break;
      case 10:
        setLastIndex(10);
        setFirstIndex(0);
        setCurrentPage(1);
        setPage(1);
        break;
      default:
        setLastIndex(20);
        setFirstIndex(0);
        setCurrentPage(1);
        setPage(1);
    }
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
