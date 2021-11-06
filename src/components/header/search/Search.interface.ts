import { WithStylesProps } from 'react-jss';
import stylesSearch from './stylesSearch';

export interface SearchProps extends WithStylesProps<typeof stylesSearch> {
  searchCTA?: string;
  searchPlaceholder?: string;
  searchBtnText: string;
}
