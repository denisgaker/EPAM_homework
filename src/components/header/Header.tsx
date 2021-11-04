import * as React from 'react';
import '../style.css';

const Header: React.FC<{}> = (props) => (
  <header className="header">{props.children}</header>
);

export default Header;
