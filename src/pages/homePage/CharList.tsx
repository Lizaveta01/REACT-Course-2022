import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IChar } from '../../constants/constants';
import { useMyContext } from '../../context/Context';
import { IReducerState } from '../../reducer/Reducer';
import Char from './Char';
import { CharListWrapper } from './HomePage.styled';

type Props = {
  charList: IChar[] | [];
};

const CharList = ({ charList }: Props) => {
  // const { firstContentIndex, lastContentIndex } = useMyContext();
  const intervalStart = useSelector((state: IReducerState) => state.intervalStart);
  const intervalEnd = useSelector((state: IReducerState) => state.intervalEnd);

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
