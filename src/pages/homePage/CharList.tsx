import React from 'react';

import { IChar } from '../../constants/constants';
import { useAppSelector } from '../../hooks/hooks';

import Char from './Char';
import { CharListWrapper } from './HomePage.styled';

type Props = {
  charList: IChar[] | [];
};

const CharList = ({ charList }: Props) => {
  const { intervalStart, intervalEnd } = useAppSelector((state) => {
    return {
      intervalStart: state.filter.interval.start,
      intervalEnd: state.filter.interval.end,
    };
  });

  const renderItems = (arr: IChar[]) => {
    const items = arr.slice(intervalStart, intervalEnd).map((item: IChar) => {
      return <Char char={item} key={item.id} />;
    });
    return <ul>{items}</ul>;
  };

  const items = renderItems(charList);
  return <CharListWrapper>{items}</CharListWrapper>;
};

export default CharList;
