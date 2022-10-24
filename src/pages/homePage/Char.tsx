import React from 'react';
import { Component } from 'react';

import ModalWindow from '../../components/modalWindow/ModalWindow';
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

class Char extends Component<IProps> {
  state = {
    isModalOpen: false,
  };

  handleClick = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  render() {
    const { char } = this.props;
    const { isModalOpen } = this.state;
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
      <>
        <CharItem data-testid="char-item" onClick={this.handleClick}>
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

        {isModalOpen && <ModalWindow card={char} closeWindow={this.handleClick} />}
      </>
    );
  }
}

export default Char;

export interface IProps {
  char: IChar;
}
