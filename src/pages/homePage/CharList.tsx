import React, { Component } from 'react';

import CharService from '../../service/CharService';
import { IChar } from '../../constants/Interfaces';
import Spinner from '../../components/spinner/Spinner';
import Char from './Char';
import { CharListWrapper } from './HomePage.styled';

class CharList extends Component {
  state = {
    charList: [],
    loading: true,
    error: false,
  };

  charService = new CharService();

  componentDidMount() {
    this.onRequest();
  }
  onCharListLoaded = (newCharList: IChar[]) => {
    this.setState({ charList: newCharList, loading: false });
  };
  onError = () => {
    this.setState({ loading: false, error: true });
  };
  onRequest = () => {
    this.charService.getAllCharacters().then(this.onCharListLoaded).catch(this.onError);
  };

  renderItems = (arr: IChar[]) => {
    const items = arr.map((item: IChar) => {
      return <Char char={item} key={item.id} />;
    });
    return <ul>{items}</ul>;
  };

  render() {
    const { charList, loading } = this.state;
    const items = this.renderItems(charList);

    return <CharListWrapper>{loading ? <Spinner /> : items}</CharListWrapper>;
  }
}

export default CharList;
