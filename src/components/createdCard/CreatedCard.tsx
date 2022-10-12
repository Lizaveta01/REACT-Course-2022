import React from 'react';
import { ICreatedCard } from '../form/types';
import {
  Info,
  CardItem,
  ImgContainer,
  BirthIcon,
  BlockContainer,
  PlanetIcon,
  SpeciesIcon,
  NewsIcon,
  Name,
} from './CreatedCard.styled';

type props = {
  card: ICreatedCard;
};

const CreatedCard = ({ card }: props) => {
  const { name, planet, birth, news, species, img } = card;
  return (
    <CardItem>
      <ImgContainer style={{ backgroundImage: `url(${img})` }} />
      <Info>
        <Name>{name}</Name>
        <BlockContainer>
          <SpeciesIcon></SpeciesIcon>
          <p>{species}</p>
        </BlockContainer>
        <BlockContainer>
          <PlanetIcon />
          <p>{planet}</p>
        </BlockContainer>
        <BlockContainer>
          <BirthIcon />
          <p>{birth}</p>
        </BlockContainer>
        <NewsIcon className={news === true ? 'active' : ''} />
      </Info>
    </CardItem>
  );
};

export default CreatedCard;
