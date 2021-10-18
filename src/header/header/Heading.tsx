import * as React from 'react';
import { HeadingProps } from './Header.interface';
import { NavLink } from 'react-router-dom';

const Heading: React.FC<HeadingProps> = ({ name }: HeadingProps) => {
  return (
    <h1>
      <NavLink to={'/'}>{`${name}`}</NavLink>
    </h1>
  );
};

export default Heading;
