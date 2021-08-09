import * as React from 'react';
import {HeaderProps} from './Header.interface';
import '../style.css';

const Header: React.FC<{}> = (props: HeaderProps) => (
  <header className="header">{props.children}</header>
);

export default Header;
