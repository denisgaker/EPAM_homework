import { WithStylesProps } from 'react-jss';
import styles from './style';

export interface SearchProps extends WithStylesProps<typeof styles> {
  searchCTA?: string;
  searchPlaceholder?: string;
  searchBtnText: string;
}
