import React from 'react';

import { IChar } from '../../constants/constants';
import { useMyContext } from '../../context/Context';
import Char from './Char';
import { CharListWrapper } from './HomePage.styled';

const CharList = () => {
  const { firstContentIndex, lastContentIndex, cards } = useMyContext();

  const renderItems = (arr: IChar[]) => {
    const items = arr.slice(firstContentIndex, lastContentIndex).map((item: IChar) => {
      return <Char char={item} key={item.id} />;
    });
    return <ul>{items}</ul>;
  };

  const items = renderItems(cards);
  return <CharListWrapper>{items}</CharListWrapper>;
};

export default CharList;
