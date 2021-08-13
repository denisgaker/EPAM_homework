import * as React from "react";
import { footerType } from "./Footer.interface";
import '../style.css';

const Footer: React.FC<footerType> = (props: footerType) => (
    <footer className='footer'>{props.children}</footer>
);

export default Footer;