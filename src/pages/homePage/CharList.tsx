import React from 'react';

import { IChar } from '../../constants/constants';
import { useMyContext } from '../../context/Context';
import Char from './Char';
import { CharListWrapper } from './HomePage.styled';

type Props = {
  charList: IChar[] | [];
};

const CharList = ({ charList }: Props) => {
  const { firstContentIndex, lastContentIndex } = useMyContext();

  const renderItems = (arr: IChar[]) => {
    const items = arr.slice(firstContentIndex, lastContentIndex).map((item: IChar) => {
      return <Char char={item} key={item.id} />;
    });
    return <ul>{items}</ul>;
  };

  const items = renderItems(charList);
  return <CharListWrapper>{items}</CharListWrapper>;
};

export default CharList;
