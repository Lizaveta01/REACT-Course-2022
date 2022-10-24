import React, { Component } from 'react';

import { IChar } from '../../constants/constants';
import Char from './Char';
import { CharListWrapper } from './HomePage.styled';

class CharList extends Component<IProps> {
  renderItems = (arr: IChar[]) => {
    const items = arr.map((item: IChar) => {
      return <Char char={item} key={item.id} />;
    });
    return <ul>{items}</ul>;
  };

  render() {
    const { charList } = this.props;
    const items = this.renderItems(charList);
    return <CharListWrapper>{items}</CharListWrapper>;
  }
}

export default CharList;

export interface IProps {
  charList: IChar[] | [];
}
