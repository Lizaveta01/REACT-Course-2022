import React from 'react';
import { Component } from 'react';
import { Info, CardItem } from './CreatedCard.styled';

const CreatedCard = () => {
  return (
    <CardItem>
      <img src="" alt="" />
      <Info>
        <p>Name</p>
        <p>Country</p>
        <p>Birth</p>
        <p>Skills</p>
        <p>Gender</p>
      </Info>
    </CardItem>
  );
};

export default CreatedCard;
