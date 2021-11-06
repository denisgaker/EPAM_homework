const stylesSearch = {
  search: {
    display: 'flex',
    'flex-flow': 'row wrap',
    'justify-content': 'flex-start',
    'align-items': 'flex-start',
    '& h2': {
      width: '100%',
      color: '#fff',
    },
  },
  headerSearch: {
    display: 'flex',
    'flex-flow': 'row wrap',
    'justify-content': 'space-between',
    'align-items': 'space-between',
    width: '100%',
    margin: '0 0 15px 0',
    padding: '0 10px',
    'min-height': '31px',
  },
  searchCtrl: {
    display: 'flex',
    'flex-flow': 'row wrap',
    'justify-content': 'space-between',
    'align-items': 'flex-start',
    width: '100%',
  },
  searchBy: {
    '& span': {
      padding: '5px 10px',
      color: '#fff',
    },
  },
  headerSearchBtn: {
    'min-height': '31px',
    padding: '5px 10px',
    border: '1px solid #ff0000',
    'background-color': '#ff0000',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color ease .3s, color ease .3s',
    '&:hover': {
      'background-color': '#fff',
      color: '#ff0000',
      transition: 'background-color ease .3s, color ease .3s',
      '& a': {
        color: '#ff0000',
        transition: 'color ease .3s',
      },
    },
    '& a': {
      color: '#fff',
      'text-decoration': 'none',
      transition: 'color ease .3s',
    },
  },
};

export default stylesSearch;
