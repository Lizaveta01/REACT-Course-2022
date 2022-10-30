import React from 'react';
import { useMyContext } from '../../context/Context';
import { SelectContainer, Container, Label } from './Filter.styled';

const Filter = () => {
  const { status, species, gender, setStatus, setSpecies, setGender } = useMyContext();

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
  ];

  const setOption = (option: string, funcType: string) => {
    switch (funcType) {
      case 'Species':
        return setSpecies(option);
      case 'Status':
        return setStatus(option);
      case 'Gender':
        return setGender(option);
    }
  };

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
                -//-
              </option>
              {item.option!.map((option: string, index: number) => (
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
