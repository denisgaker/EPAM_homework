type mainType = {
  [key in MainKey]: string
};

enum MainKey {
  nameApp = 'nameApp',
  searchCTA = 'searchCTA',
  searchPlaceholder = 'searchPlaceholder',
  searchBtnText = 'searchBtnText'
};

interface DatatsType {
  main: mainType
  movies: MoviesType[]
}

interface MovieTypeStrings {
  title: string
  description: string
  genre: string
  image: string
  id: string
}

interface MoviesType extends Omit<MovieTypeStrings, 'sumField'> {
  year: number
}

enum MoviesKey {
  title = 'title',
  description = 'description',
  genre = 'genre',
  image = 'image',
  id = 'id'
}

export const Datats: DatatsType = {
  'main': {
    'nameApp': 'HETflix',
    'searchCTA': 'Find yout movie',
    'searchPlaceholder': 'Quentin Tarantino',
    'searchBtnText': 'Search',
  },
  'movies': [
    {
      'title': 'Rick and Morty',
      'description': 'Animated science fiction sitcom',
      'year': 1995,
      'genre': 'comedy',
      'image': './img/rikAndMorti.jpg',
      'id': 'r43d2',
    },
    {
      'title': 'Stranger Things',
      'description': 'Animated science fiction sercies',
      'year': 1995,
      'genre': 'fantasy',
      'image': './img/strangerThings.jpg',
      'id': 'f43ds',
    },
    {
      'title': 'Interstellar',
      'description': 'Epic science fiction movie',
      'year': 1995,
      'genre': 'fantasy',
      'image': './img/interstellar.jpg',
      'id': 'd2s24',
    },
  ],
};
