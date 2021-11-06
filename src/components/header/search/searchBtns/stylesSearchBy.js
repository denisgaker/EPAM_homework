const stylesSearchBy = {
  searchByBtn: {
    margin: '0 5px',
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
    },
    '&title': {
      'background-color': '#fff',
      color: '#ff0000',
      transition: 'background-color ease .3s, color ease .3s',
    },
    '& [data-state="title"]': {
      'background-color': '#fff',
      color: '#ff0000',
      transition: 'background-color ease .3s, color ease .3s',
    },
  },
};

export default stylesSearchBy;
