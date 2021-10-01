/* eslint-disable no-unused-vars */
type mainType = {
  [key in MainKey]: string;
};

enum MainKey {
  nameApp = 'nameApp',
  searchCTA = 'searchCTA',
  searchPlaceholder = 'searchPlaceholder',
  searchBtnText = 'searchBtnText',
}

interface DatatsType {
  main: mainType;
  socialNetworkLinks: SocialNetworkLinksType[];
  movies: MoviesType[];
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

interface MovieTypeStrings {
  title: string;
  description: string;
  genre: string;
  image: string;
  id: string;
}

interface MoviesType extends Omit<MovieTypeStrings, 'sumField'> {
  year: number;
}

enum MoviesKey {
  title = 'title',
  description = 'description',
  genre = 'genre',
  image = 'image',
  id = 'id',
}

export const Datats: DatatsType = {
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
  movies: [
    {
      title: 'Rick and Morty',
      description: 'Animated science fiction sitcom',
      year: 1995,
      genre: 'comedy',
      image: './img/rikAndMorti.jpg',
      id: 'r43d2',
    },
    {
      title: 'Stranger Things',
      description: 'Animated science fiction sercies',
      year: 1995,
      genre: 'fantasy',
      image: './img/strangerThings.jpg',
      id: 'f43ds',
    },
    {
      title: 'Interstellar',
      description: 'Epic science fiction movie',
      year: 1995,
      genre: 'fantasy',
      image: './img/interstellar.jpg',
      id: 'd2s24',
    },
  ],
};
