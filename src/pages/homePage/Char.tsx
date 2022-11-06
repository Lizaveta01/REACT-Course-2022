import React from 'react';
import { Link } from 'react-router-dom';

import { ClassCSS, IChar, Word } from '../../constants/constants';
import IconPlanetImage from '../../assets/Planet.svg';
import IconGenderImage from '../../assets/Gender.svg';
import IconSpeciesImage from '../../assets/Alien.svg';
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
import { generateKey } from '../../utils/usefullFunctions';

type Props = {
  char: IChar;
};

const Char = ({ char }: Props) => {
  const { image, name, origin, gender, species, id } = char;

  const aboutCharInfo = [
    {
      info: gender,
      icon: IconGenderImage,
    },
    {
      info: species,
      icon: IconSpeciesImage,
    },
    {
      info: origin.name.split(' ')[0],
      icon: IconPlanetImage,
    },
  ];

  return (
    <>
      <CharItem data-testid="char-item" as={Link} to={`character/${id}`}>
        <ButtonAddFavorite />
        <ItemImageDiv>
          <img src={image} alt="char-image" />
        </ItemImageDiv>
        <ItemInfoDiv>
          <AboutChar>
            <ItemName>{name.split(' ').length > 2 ? name.split(' ')[0] : name}</ItemName>
            <ItemStatus
              className={
                char.status === Word.ALIVE
                  ? ClassCSS.ACTIVE
                  : char.status === Word.DEAD
                  ? ClassCSS.DEAD
                  : ''
              }
            >
              {char.status}
            </ItemStatus>
          </AboutChar>
          <AboutCharAddit>
            {aboutCharInfo.map((item, index) => {
              return (
                <ItemContainer key={generateKey(`${item.info}${index}`)}>
                  <IconDiv style={{ backgroundImage: `url(${item.icon})` }} />
                  <p>{item.info}</p>
                </ItemContainer>
              );
            })}
          </AboutCharAddit>
        </ItemInfoDiv>
      </CharItem>
    </>
  );
};

export default Char;
