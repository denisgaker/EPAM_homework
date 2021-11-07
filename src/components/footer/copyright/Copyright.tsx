import React, { FC, memo } from 'react';
import { CopyType } from './Copyright.interface';

const Copyright:FC<CopyType> = ({ name }) => (
  <p>&#169;{` ${new Date().getFullYear()} ${name} | All right reserved`}</p>
);

export default memo(Copyright);
