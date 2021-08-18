import * as React from 'react';
import { HeadingProps } from './Header.interface';

const Heading: React.FC<HeadingProps> = ({ name }: HeadingProps) => {
  return <h1>{`${name}`}</h1>;
};

export default Heading;
