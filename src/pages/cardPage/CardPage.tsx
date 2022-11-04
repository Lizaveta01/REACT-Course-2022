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
      id: 1231,
      title: 'Name',
      text: character?.name,
    },
    {
      id: 1232,
      title: 'Status',
      text: character?.status,
    },
    {
      id: 1233,
      title: 'Gender',
      text: character?.gender,
    },
    {
      id: 1234,
      title: 'Species',
      text: character?.species,
    },
    {
      id: 1235,
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
          {aboutCharInfo.map((item) => {
            return (
              <p key={item.id}>
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
