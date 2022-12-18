import React from 'react';
import { UseFormRegister } from 'react-hook-form';

import { IFormData, Name } from '../types';
import { LabelNews } from './CheckedNews.styled';

type Props = {
  label: string;
  name: Name;
  register: UseFormRegister<IFormData>;
};

const CheckedNews = ({ label, name, register }: Props) => {
  return (
    <LabelNews>
      {label}
      <input type="checkbox" {...register(name)} />
    </LabelNews>
  );
};

export default CheckedNews;
