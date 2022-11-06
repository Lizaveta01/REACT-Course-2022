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
import { generateKey } from '../../utils/usefullFunctions';

type Props = {
  card: ICreatedCard;
};

const CreatedCard = ({ card }: Props) => {
  const { name, planet, birth, news, species, img } = card;

  const aboutCharInfo = [
    {
      info: species,
      icon: IconSpeciesImage,
    },
    {
      info: planet,
      icon: IconPlanetImage,
    },
    {
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
            <BlockContainer key={generateKey(item.info)}>
              <IconDiv style={{ backgroundImage: `url(${item.icon})` }} />
              <p>{item.info}</p>
            </BlockContainer>
          );
        })}
        <NewsIcon className={news ? ClassCSS.ACTIVE : ''} />
      </Info>
    </CardItem>
  );
};

export default CreatedCard;
