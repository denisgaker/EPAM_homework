import React, { FC } from 'react';
import withStyles from 'react-jss';
import { FooterType } from './Footer.interface';
import stylesFooter from './stylesFooter';

const Footer:FC<FooterType> = ({ classes, children }) => (
  <footer className={classes.footer}>{children}</footer>
);

const StyledFooter = withStyles(stylesFooter)(Footer);

export default StyledFooter;
