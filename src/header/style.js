import Background from './img/header_bg.jpg';

const styles = {
  header: {
    overflow: 'hidden',
    width: '100%',
    backgroundImage: `url(${Background})`,
    padding: '15px 10px',
    '& h1': {
      color: '#fff',
      'text-align': 'center',
    },
  },
  searchBy: {
    span: {
      padding: '5px 10px',
      color: '#fff',
    },
  },
  searchByBtn: {
    'min-height': '31px',
    padding: '5px 10px',
    border: '1px solid #ff0000',
    'background-color': '#ff0000',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color ease .3s, color ease .3s',
    '&:hover, & :focus, & .active, & title[data-state="title"], & genre[data-state="genre"]': {
      'background-color': '#fff',
      color: '#ff0000',
      transition: 'background-color ease .3s, color ease .3s',
    },
  },
};

export default styles;
