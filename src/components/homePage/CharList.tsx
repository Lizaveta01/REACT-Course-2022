import React, { Component } from 'react';
import {
  CharItem,
  ButtonAddFavorite,
  CharListWrapper,
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

class CharList extends Component {
  state = {
    charList: [],
    loading: true,
    error: false,
    newItemLoading: false,
  };

  render() {
    return (
      <CharListWrapper>
        <CharItem key="1">
          <ButtonAddFavorite />
          <ItemImageDiv>
            <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="char" />
          </ItemImageDiv>
          <ItemInfoDiv>
            <AboutChar>
              <ItemName>Morty Smith</ItemName>
              <ItemStatus>Alive</ItemStatus>
            </AboutChar>
            <AboutCharAddit>
              <ItemGender>
                <IconGender />
                <p>Male</p>
              </ItemGender>
              <ItemSpecies>
                <IconSpecies />
                <p>Human</p>
              </ItemSpecies>
              <ItemPlanet>
                <IconPlanet />
                <p>Earth</p>
              </ItemPlanet>
            </AboutCharAddit>
          </ItemInfoDiv>
        </CharItem>
      </CharListWrapper>
    );
  }
}

export default CharList;
