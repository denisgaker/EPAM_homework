import React from 'react';
import { WithStylesProps } from 'react-jss';
import stylesFooter from './stylesFooter';

export interface FooterType extends WithStylesProps<typeof stylesFooter> {
  children: Element | React.ReactNode;
}
