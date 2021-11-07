import Background from './img/header_bg.jpg';

const styles = {
  header: {
    overflow: 'hidden',
    width: '100%',
    backgroundImage: `url(${Background})`,
    padding: '15px 10px',
    '& h1': {
      color: '#fff',
      textAlign: 'center',
      fontSize: 30,
      width: '100%',
      maxWidth: 1200,
      margin: [0, 'auto'],
      '& a': {
        color: '#fff',
        textDecoration: 'none',
      },
    },
  },
  searchBy: {
    span: {
      padding: '5px 10px',
      color: '#fff',
    },
  },
  searchByBtn: {
    minHeight: '31px',
    padding: '5px 10px',
    border: '1px solid #ff0000',
    backgroundColor: '#ff0000',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color ease .3s, color ease .3s',
    '&:hover, & :focus': {
      backgroundColor: '#fff',
      color: '#ff0000',
      transition: 'background-color ease .3s, color ease .3s',
    },
  },
};

export default styles;
