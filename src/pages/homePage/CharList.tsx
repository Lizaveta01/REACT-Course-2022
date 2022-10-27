import React from 'react';

import { IChar } from '../../constants/constants';
import { Char } from './Char';
import { CharListWrapper } from './HomePage.styled';

type Props = {
  charList: IChar[] | [];
};

export const CharList = ({ charList }: Props) => {
  const renderItems = (arr: IChar[]) => {
    const items = arr.map((item: IChar) => {
      return <Char char={item} key={item.id} />;
    });
    return <ul>{items}</ul>;
  };

  const items = renderItems(charList);
  return <CharListWrapper>{items}</CharListWrapper>;
};
