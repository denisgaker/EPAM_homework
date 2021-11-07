import React, { FC } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import datats from '../../Data';
import stylesSocLinks from './stylesSocLinks';
import icons from './img/icons';
import './style.css';

interface StyledSocLinksProps extends WithStylesProps<typeof stylesSocLinks> {}

const footerData = datats.socialNetworkLinks;

const SocLinks:FC<StyledSocLinksProps> = ({ classes }) => (
    <div className={classes.soc}>
      {footerData.map((fd) => (
        <a href={fd.link}
           target={fd.target}
           title={fd.desc}
           key={fd.key}>
            <img
              src={icons.filter((ic) => ic.name === fd.name)[0].link}
              alt={fd.desc}
            />
        </a>
      ))}
    </div>
);

const StyledSocLink = withStyles(stylesSocLinks)(SocLinks);

export default StyledSocLink;
