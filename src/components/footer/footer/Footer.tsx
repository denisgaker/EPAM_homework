import * as React from 'react';
import { FooterType } from './Footer.interface';
import '../style.css';

const Footer: React.FC<FooterType> = (props: FooterType) => (
  <footer className="footer">{props.children}</footer>
);

export default Footer;
