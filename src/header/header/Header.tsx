import React, { FC } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
// import { HeaderProps } from './Header.interface';
// import '../style.css';
import styles from '../style';

interface StyledHeaderProps extends WithStylesProps<typeof styles> {}

const Header:FC<StyledHeaderProps> = ({ classes, children }) => (
  <header className={classes.header}>{children}</header>
);

const StylesHeader = withStyles(styles)(Header);

export default StylesHeader;
