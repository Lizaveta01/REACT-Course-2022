import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useHttp } from '../../utils/customHooks';

import {
  AboutCard,
  ButtonBack,
  Container,
  HomeLink,
  ItemImageDiv,
  MainInfo,
  PathTitle,
} from './CardPage.styled';

export interface ICharacter {
  name: string;
  status: string;
  gender: string;
  species: string;
  image: string;
  location: {
    name: string;
  };
}

const CardPage = () => {
  const { cardID } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState<ICharacter>();
  const { request } = useHttp();

  useEffect(() => {
    getCharacter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getCharacter() {
    const apiBase = 'https://rickandmortyapi.com/api';
    const res = await request(`${apiBase}/character/${cardID}`);
    setCharacter(res);
  }

  function handleClick() {
    navigate('/');
  }

  const aboutCharInfo = [
    {
      title: 'Name',
      text: character?.name,
    },
    {
      title: 'Status',
      text: character?.status,
    },
    {
      title: 'Gender',
      text: character?.gender,
    },
    {
      title: 'Species',
      text: character?.species,
    },
    {
      title: 'Planet',
      text: character?.location.name,
    },
  ];

  return (
    <Container>
      <PathTitle>
        <HomeLink onClick={handleClick}>Home / </HomeLink>
        <h3> {character?.name}</h3>
      </PathTitle>
      <AboutCard>
        <ItemImageDiv>
          <img src={character?.image} alt="char-image" />
        </ItemImageDiv>
        <MainInfo>
          {aboutCharInfo.map((item, index) => {
            return (
              <p key={index}>
                {item.title}: {item.text}
              </p>
            );
          })}
        </MainInfo>
      </AboutCard>
      <ButtonBack onClick={handleClick}>Back Home</ButtonBack>
    </Container>
  );
};

export default CardPage;
