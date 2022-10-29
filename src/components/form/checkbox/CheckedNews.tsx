import React from 'react';
import { IFormData, Name } from '../types';
import { UseFormRegister } from 'react-hook-form';
import { LabelNews } from './CheckedNews.styled';

const CheckedNews = ({ label, name, register }: IProps) => {
  return (
    <LabelNews>
      {label}
      <input type="checkbox" {...register(name)} />
    </LabelNews>
  );
};

export default CheckedNews;

export interface IProps {
  label: string;
  name: Name;
  register: UseFormRegister<IFormData>;
}
