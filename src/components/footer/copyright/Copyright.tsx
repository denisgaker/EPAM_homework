import * as React from 'react';
import { CopyType } from './Copyright.interface';

const Copyright: React.FC<CopyType> = ({ name }: CopyType) => {
  const date = new Date().getFullYear();
  const text = ' | All right reserved';
  return <p>&#169;{` ${date} ${name} ${text}`}</p>;
};

export default Copyright;
