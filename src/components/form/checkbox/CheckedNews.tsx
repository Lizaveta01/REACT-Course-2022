import React, { Component } from 'react';

import { LabelNews } from './CheckedNews.styled';

class CheckedNews extends Component<IProps> {
  render() {
    const { label, inputRef } = this.props;

    return (
      <LabelNews>
        {label}
        <input type="checkbox" ref={inputRef} />
      </LabelNews>
    );
  }
}

export default CheckedNews;

export interface IProps {
  label: string;
  inputRef: React.RefObject<HTMLInputElement>;
}
