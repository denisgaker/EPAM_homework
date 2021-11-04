import { SocialNetworkLinksType } from './components/footer/socialNetworkLinks.types';

export type MainType = {
  [key in MainKey]: string;
};

enum MainKey {
  nameApp = 'nameApp',
  searchCTA = 'searchCTA',
  searchPlaceholder = 'searchPlaceholder',
  searchBtnText = 'searchBtnText',
}

export interface DatatsType {
  main: MainType;
  socialNetworkLinks: SocialNetworkLinksType[];
}
