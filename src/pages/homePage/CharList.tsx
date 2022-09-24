/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Component } from 'react';
import CharService from '../../service/CharService';
import Spinner from '../components/spinner/Spinner';

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
  };

  charService = new CharService();

  onCharListLoaded = (newCharList: any) => {
    this.setState({ charList: newCharList, loading: false });
  };
  componentDidMount() {
    this.onRequest();
  }
  onError = () => {
    this.setState({ loading: false, error: true });
  };
  onRequest = () => {
    this.charService.getAllCharacters().then(this.onCharListLoaded).catch(this.onError);
  };

  renderItems = (arr: any) => {
    const items = arr.map((item: any) => {
      return (
        <CharItem key={item.id}>
          <ButtonAddFavorite />
          <ItemImageDiv>
            <img src={item.image} alt="char" />
          </ItemImageDiv>
          <ItemInfoDiv>
            <AboutChar>
              <ItemName>
                {item.name.split(' ').length > 2 ? item.name.split(' ')[0] : item.name}
              </ItemName>
              <ItemStatus
                className={
                  item.status === 'Alive' ? 'active' : item.status === 'Dead' ? 'dead' : ''
                }
              >
                {item.status}
              </ItemStatus>
            </AboutChar>
            <AboutCharAddit>
              <ItemGender>
                <IconGender />
                <p>{item.gender}</p>
              </ItemGender>
              <ItemSpecies>
                <IconSpecies />
                <p>{item.species}</p>
              </ItemSpecies>
              <ItemPlanet>
                <IconPlanet />
                <p>{item.planet.split(' ')[0]}</p>
              </ItemPlanet>
            </AboutCharAddit>
          </ItemInfoDiv>
        </CharItem>
      );
    });
    return items;
  };

  render() {
    const { charList, loading } = this.state;
    const items = this.renderItems(charList);

    return <CharListWrapper>{loading ? <Spinner /> : items}</CharListWrapper>;
  }
}

export default CharList;
