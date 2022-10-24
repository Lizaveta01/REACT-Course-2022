import React from 'react';

import IconSpeciesImage from '../../assets/Alien.svg';
import IconPlanetImage from '../../assets/Planet.svg';
import IconBirthdayImage from '../../assets/Birthday.svg';
import { ICreatedCard } from '../form/types';
import {
  Info,
  CardItem,
  ImgContainer,
  IconDiv,
  BlockContainer,
  NewsIcon,
  Name,
} from './CreatedCard.styled';
import { ClassCSS } from '../../constants/constants';

type props = {
  card: ICreatedCard;
};

const CreatedCard = ({ card }: props) => {
  const { name, planet, birth, news, species, img } = card;

  const aboutCharInfo = [
    {
      id: 11221,
      info: species,
      icon: IconSpeciesImage,
    },
    {
      id: 11222,
      info: planet,
      icon: IconPlanetImage,
    },
    {
      id: 11223,
      info: birth,
      icon: IconBirthdayImage,
    },
  ];

  return (
    <CardItem>
      <ImgContainer style={{ backgroundImage: `url(${img})` }} />
      <Info>
        <Name>{name}</Name>
        {aboutCharInfo.map((item) => {
          return (
            <BlockContainer key={item.id}>
              <IconDiv style={{ backgroundImage: `url(${item.icon})` }} />
              <p>{item.info}</p>
            </BlockContainer>
          );
        })}
        <NewsIcon className={news === true ? ClassCSS.ACTIVE : ''} />
      </Info>
    </CardItem>
  );
};

export default CreatedCard;
