import React from 'react';

import IconPlanetImage from '../../assets/Planet.svg';
import IconGenderImage from '../../assets/Gender.svg';
import IconSpeciesImage from '../../assets/Alien.svg';

import { ClassCSS, IChar, Words } from '../../constants/Interfaces';
import {
  CharItem,
  ButtonAddFavorite,
  ItemImageDiv,
  ItemInfoDiv,
  AboutChar,
  ItemName,
  ItemStatus,
  IconDiv,
  ItemContainer,
  AboutCharAddit,
} from './HomePage.styled';

type props = {
  char: IChar;
  key: number;
};

const Char = ({ char }: props) => {
  const { image, name, origin, gender, species } = char;

  const aboutCharInfo = [
    {
      id: 11231,
      info: gender,
      icon: IconGenderImage,
    },
    {
      id: 11232,
      info: species,
      icon: IconSpeciesImage,
    },
    {
      id: 11233,
      info: origin.name.split(' ')[0],
      icon: IconPlanetImage,
    },
  ];

  return (
    <CharItem data-testid="char-item">
      <ButtonAddFavorite />
      <ItemImageDiv>
        <img src={image} alt="char-image" />
      </ItemImageDiv>
      <ItemInfoDiv>
        <AboutChar>
          <ItemName>{name.split(' ').length > 2 ? name.split(' ')[0] : name}</ItemName>
          <ItemStatus
            className={
              char.status === Words.ALIVE
                ? ClassCSS.ACTIVE
                : char.status === Words.DEAD
                ? ClassCSS.DEAD
                : ''
            }
          >
            {char.status}
          </ItemStatus>
        </AboutChar>
        <AboutCharAddit>
          {aboutCharInfo.map((item) => {
            return (
              <ItemContainer key={item.id}>
                <IconDiv style={{ backgroundImage: `url(${item.icon})` }} />
                <p>{item.info}</p>
              </ItemContainer>
            );
          })}
        </AboutCharAddit>
      </ItemInfoDiv>
    </CharItem>
  );
};

export default Char;
