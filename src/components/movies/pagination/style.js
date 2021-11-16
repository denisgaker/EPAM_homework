const styles = {
  pagination: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'stretch',
    width: '100%',
    overflowX: 'auto',
  },
  page: {
    padding: 10,
    border: '1px solid #ff0000',
    backgroundColor: '#ff0000',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color .3s ease, color .3s ease',
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
  active: {
    backgroundColor: '#fff',
    color: '#ff0000',
  },
  start: {
    margin: [0, 10, 0, 0],
  },
  end: {
    margin: [0, 0, 0, 10],
  },
};

export default styles;
