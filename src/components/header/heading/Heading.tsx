import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { HeadingProps } from './Heading.types';

const Heading: React.FC<HeadingProps> = ({ name }) => (
    <h1>
      <NavLink to={'/'}>{`${name}`}</NavLink>
    </h1>
);

export default Heading;
