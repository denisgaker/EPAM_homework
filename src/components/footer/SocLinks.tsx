import React, { FC } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import socLinks from './socLinks.constants';
import styles from './style';
import icons from './img/icons';

interface StyledSocLinksProps extends WithStylesProps<typeof styles> {}

const SocLinks:FC<StyledSocLinksProps> = ({ classes }) => (
    <div className={classes.soc}>
      {socLinks.map((sl) => (
        <a href={sl.link}
           target={sl.target}
           title={sl.desc}
           key={sl.key}>
            <img
              src={icons.filter((ic) => ic.name === sl.name)[0].link}
              alt={sl.desc}
            />
        </a>
      ))}
    </div>
);

const StyledSocLink = withStyles(styles)(SocLinks);

export default StyledSocLink;
