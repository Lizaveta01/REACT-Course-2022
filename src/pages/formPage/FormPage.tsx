import React from 'react';
import { Component } from 'react';
import CreatedCard from '../../components/createdCard/CreatedCard';
import Form from '../../components/form/Form';
import { ICreatedCard } from '../../components/form/types';
import { CardList, FormPageWrapper } from './FormPage.styled';

class FormPage extends Component {
  state = {
    createdCards: [],
  };

  addCard = (newCard: ICreatedCard) => {
    this.setState({ createdCards: [...this.state.createdCards, newCard] });
    localStorage.setItem(`cards`, JSON.stringify(this.state.createdCards));
  };

  render() {
    const { createdCards } = this.state;
    return (
      <FormPageWrapper>
        <Form addCard={this.addCard} />
        <CardList>
          {!!createdCards.length &&
            createdCards.map((item, index) => {
              return <CreatedCard card={item} key={index} />;
            })}
        </CardList>
      </FormPageWrapper>
    );
  }
}

export default FormPage;
