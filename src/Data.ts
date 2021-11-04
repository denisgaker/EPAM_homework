/* eslint-disable no-unused-vars */
type MainType = {
  [key in MainKey]: string;
};

enum MainKey {
  nameApp = 'nameApp',
  searchCTA = 'searchCTA',
  searchPlaceholder = 'searchPlaceholder',
  searchBtnText = 'searchBtnText',
}

interface DatatsType {
  main: MainType;
  socialNetworkLinks: SocialNetworkLinksType[];
}

type SocialNetworkLinksType = {
  [key in SocialNetworkLinksKey]: string;
};

enum SocialNetworkLinksKey {
  name = 'name',
  link = 'link',
  desc = 'desc',
  target = 'target',
  key = 'key',
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
enum MoviesKey {
  title = 'title',
  description = 'description',
  genre = 'genre',
  image = 'image',
  id = 'id',
}

const Datats: DatatsType = {
  main: {
    nameApp: 'HETflix',
    searchCTA: 'Find yout movie',
    searchPlaceholder: 'Quentin Tarantino',
    searchBtnText: 'Search',
  },
  socialNetworkLinks: [
    {
      name: 'vk',
      link: 'https://vk.com',
      desc: 'Переход на социальную сеть Вконтакте',
      target: '_blanck',
      key: 'fdsn_1',
    },
    {
      name: 'facebook',
      link: 'https://facebook.com',
      desc: 'Переход на социальную сеть Facebook',
      target: '_blanck',
      key: 'fdsn_2',
    },
    {
      name: 'instagram',
      link: 'https://instagram.com',
      desc: 'Переход на социальную сеть Instagram',
      target: '_blanck',
      key: 'fdsn_3',
    },
    {
      name: 'youtube',
      link: 'https://youtube.com',
      desc: 'Переход на видеохостинг Youtube',
      target: '_blanck',
      key: 'fdsn_4',
    },
  ],
};

export default Datats;
