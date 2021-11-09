const styles = {
  search: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    maxWidth: 1200,
    margin: [0, 'auto'],
    '& h2': {
      width: '100%',
      color: '#fff',
    },
  },
  headerSearch: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    alignItems: 'space-between',
    width: '100%',
    margin: '0 0 15px 0',
    padding: '0 10px',
    minHeight: '31px',
  },
  searchCtrl: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
  },
  headerSearchBtn: {
    minHeight: '31px',
    padding: '5px 10px',
    border: '1px solid #ff0000',
    backgroundColor: '#ff0000',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color ease .3s, color ease .3s',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#ff0000',
      transition: 'background-color ease .3s, color ease .3s',
      '& a': {
        color: '#ff0000',
        transition: 'color ease .3s',
      },
    },
    '& a': {
      color: '#fff',
      textDecoration: 'none',
      transition: 'color ease .3s',
    },
  },
};

export default styles;
