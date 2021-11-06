import React, { FC } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import datats from '../../Data';
import stylesSocLinks from './stylesSocLinks';
import './style.css';

interface StyledSocLinksProps extends WithStylesProps<typeof stylesSocLinks> {}

const footerData = datats.socialNetworkLinks;

const SocLinks:FC<StyledSocLinksProps> = ({ classes }) => (
    <div className={classes.soc}>
      {footerData.map((fd) => (
        <a href={fd.link}
           target={fd.target}
           title={fd.desc}
           className={fd.name}
           key={fd.key}></a>
      ))}
    </div>
);

const StyledSocLink = withStyles(stylesSocLinks)(SocLinks);

export default StyledSocLink;
