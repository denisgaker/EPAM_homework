import React, { FC } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import styles from './style';

interface StyledFooterProps extends WithStylesProps<typeof styles> {}

const Footer:FC<StyledFooterProps> = ({ classes, children }) => (
  <footer className={classes.footer}>{children}</footer>
);

const StyledFooter = withStyles(styles)(Footer);

export default StyledFooter;
