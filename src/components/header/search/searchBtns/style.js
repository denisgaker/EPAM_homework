const styles = {
  searchByBtn: {
    margin: '0 5px',
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
    },
  },
  title: {
    '&[data-state="title"]': {
      backgroundColor: '#fff',
      color: '#ff0000',
      transition: 'background-color ease .3s, color ease .3s',
    },
  },
  genres: {
    '&[data-state="genres"]': {
      backgroundColor: '#fff',
      color: '#ff0000',
      transition: 'background-color ease .3s, color ease .3s',
    },
  },
};

export default styles;
