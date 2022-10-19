import React from 'react';
import { Component } from 'react';
import CreatedCard from '../../components/createdCard/CreatedCard';
import Form from '../../components/form/Form';
import { ICreatedCard } from '../../components/form/types';
import { CardList, FormPageWrapper, ModalWindow } from './FormPage.styled';

interface IPrevState {
  createdCards: [];
  isOpenModalWindow: false;
}
class FormPage extends Component {
  state = {
    createdCards: [],
    isOpenModalWindow: false,
  };

  addCard = (newCard: ICreatedCard) => {
    this.setState({ createdCards: [...this.state.createdCards, newCard] });
    localStorage.setItem(`cards`, JSON.stringify(this.state.createdCards));
  };

  closeModalWindow = () => {
    setTimeout(() => {
      this.setState({ isOpenModalWindow: false });
    }, 2000);
  };

  componentDidUpdate(prevProps: Readonly<never>, prevState: Readonly<IPrevState>) {
    if (this.state.createdCards !== prevState.createdCards) {
      this.setState({ isOpenModalWindow: true });
      this.closeModalWindow();
    }
  }

  render() {
    const { createdCards, isOpenModalWindow } = this.state;
    return (
      <FormPageWrapper>
        <Form addCard={this.addCard} />
        <CardList>
          {!!createdCards.length &&
            createdCards.map((item, index) => {
              return <CreatedCard card={item} key={index} />;
            })}
        </CardList>
        <ModalWindow className={isOpenModalWindow ? 'active' : ''}>
          <p>Card create successfully!</p>
        </ModalWindow>
      </FormPageWrapper>
    );
  }
}

export default FormPage;
