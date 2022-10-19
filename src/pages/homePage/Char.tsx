import React from 'react';

import { IChar } from '../../constants/constants';
import {
  CharItem,
  ButtonAddFavorite,
  ItemImageDiv,
  ItemInfoDiv,
  AboutChar,
  ItemName,
  ItemStatus,
  ItemGender,
  ItemSpecies,
  ItemPlanet,
  IconGender,
  IconSpecies,
  IconPlanet,
  AboutCharAddit,
} from './HomePage.styled';

type props = {
  char: IChar;
  key: number;
};

const Char = ({ char }: props) => {
  return (
    <CharItem data-testid="char-item">
      <ButtonAddFavorite />
      <ItemImageDiv>
        <img src={char.image} alt="char-image" />
      </ItemImageDiv>
      <ItemInfoDiv>
        <AboutChar>
          <ItemName>
            {char.name.split(' ').length > 2 ? char.name.split(' ')[0] : char.name}
          </ItemName>
          <ItemStatus
            className={char.status === 'Alive' ? 'active' : char.status === 'Dead' ? 'dead' : ''}
          >
            {char.status}
          </ItemStatus>
        </AboutChar>
        <AboutCharAddit>
          <ItemGender>
            <IconGender />
            <p>{char.gender}</p>
          </ItemGender>
          <ItemSpecies>
            <IconSpecies />
            <p>{char.species}</p>
          </ItemSpecies>
          <ItemPlanet>
            <IconPlanet />
            <p>{char.origin.name.split(' ')[0]}</p>
          </ItemPlanet>
        </AboutCharAddit>
      </ItemInfoDiv>
    </CharItem>
  );
};

export default Char;
