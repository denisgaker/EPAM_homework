const styles = {
  movieList: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    maxWidth: 1200,
    margin: [0, 'auto'],
    '& a': {
      padding: 5,
      margin: [15, 'auto'],
      border: '1px solid #eee',
      textDecoration: 'none',
      color: '#242d32',
      '&:hover': {
        boxShadow: '1px 3px 4px 2px rgba(0,0,0,0.5)',
      },
    },
    '& h1': {
      fontSize: 30,
      textAlign: 'center',
    },
  },
  MovieCard: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'stretch',
    width: '100%',
    maxWidth: 350,
    padding: 0,
    '& img': {
      display: 'block',
      width: '100%',
    },
    '& h3': {
      display: 'block',
      margin: '20px 0',
      padding: [0, 10],
      width: '100%',
      textDecoration: 'none',
      textAlign: 'center',
    },
    '& span': {
      display: 'block',
      width: '100%',
      margin: '10px 0',
      padding: [0, 10],
      textAlign: 'right',
      textDecoration: 'none',
      color: '#164ebe',
    },
    '& p': {
      width: '100%',
      margin: [0, 0, 20],
      padding: [0, 10],
      textAlign: 'justify',
      textDecoration: 'none',
    },
  },
  pagination: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'stretch',
    width: '100%',
  },
  page: {
    padding: 10,
    border: '1px solid #ff0000',
    borderRight: 'none',
    backgroundColor: '#ff0000',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color .3s ease, color .3s ease',
    '&:last-child': {
      borderRight: '1px solid #ff0000',
    },
    '& active': {
      backgroundColor: '#fff',
      color: '#ff0000',
    },
    '&:hover': {
      backgroundColor: '#fff',
      color: '#ff0000',
      transition: 'background-color .3s ease, color .3s ease',
    },
    '&:focus': {
      backgroundColor: '#fff',
      color: '#ff0000',
      transition: 'background-color .3s ease, color .3s ease',
    },
  },
};

export default styles;
