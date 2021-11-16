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
    borderRight: 'none',
    backgroundColor: '#ff0000',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color .3s ease, color .3s ease',
    '&:last-child': {
      borderRight: '1px solid #ff0000',
    },
    /* '& active': {
      backgroundColor: '#fff',
      color: '#ff0000',
    }, */
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
};

export default styles;
