const styles = {
  filmPage: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%',
    marginTop: 50,
    '& img': {
      display: 'block',
      width: 'calc(50% - 50px)',
      maxWidth: 500,
    },
    '& h1': {
      width: '100%',
      textAlign: 'center',
    },
  },
  filmDesc: {
    width: '50%',
  },
};

export default styles;
