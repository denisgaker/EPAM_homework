import React, { FC } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import styles from './style';

interface StyledHeaderProps extends WithStylesProps<typeof styles> {}

const Header:FC<StyledHeaderProps> = ({ classes, children }) => (
  <header className={classes.header}>{children}</header>
);

const StyledHeader = withStyles(styles)(Header);

export default StyledHeader;
