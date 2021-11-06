const stylesMovieList2 = {
  MovieCard: {
    display: 'flex',
    'flex-flow': 'row wrap',
    'justify-content': 'flex-start',
    'align-items': 'stretch',
    width: '100%',
    'max-width': 350,
    margin: '30px 0',
    padding: 0,
    '& img': {
      display: 'block',
      width: '100%',
    },
    '& h3': {
      display: 'block',
      margin: '10px 0',
      width: 'calc(100% - 100px)',
    },
    '& span': {
      display: 'block',
      margin: '10px 0',
      width: 100,
      'text-align': 'right',
    },
    '& p': {
      margin: 0,
      width: '100%',
      'text-align': 'left',
    },
  },
  pagination: {
    display: 'flex',
    'flex-flow': 'row wrap',
    'justify-content': 'flex-start',
    'align-items': 'stretch',
    width: '100%',
  },
  page: {
    padding: 10,
    'border-top': '1px solid #ff0000',
    'border-bottom': '1px solid #ff0000',
    'border-left': '1px solid #ff0000',
    'background-color': '#ff0000',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color .3s ease, color .3s ease',
    '&:last-child': {
      'border-right': '1px solid #ff0000',
    },
    '& active': {
      'border-top': '1px solid #ff0000,',
      'border-bottom': '1px solid #ff0000',
      'border-left': '1px solid #ff0000',
      'background-color': '#fff',
      color: '#ff0000',
    },
    '&:hover': {
      'background-color': '#fff',
      color: '#ff0000',
      transition: 'background-color .3s ease, color .3s ease',
    },
    '&:focus': {
      'background-color': '#fff',
      color: '#ff0000',
      transition: 'background-color .3s ease, color .3s ease',
    },
  },
};

export default stylesMovieList2;
