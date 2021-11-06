import Vk from './img/vk.png';
import Facebook from './img/fb.png';
import Instagram from './img/ins.png';
import Youtube from './img/yt.png';

const stylesSocLinks = {
  soc: {
    display: 'flex',
    'flex-flow': 'row nowrap',
    'justify-content': 'center',
    'align-items': 'center',
    '& a': {
      display: 'block',
      width: '30px',
      height: '30px',
      margin: '0 5px',
      background: '#fff',
    },
  },
  vk: {
    background: `url(${Vk}) center center/30px auto no-repeat`,
  },
  facebook: {
    background: `url(${Facebook}) center center/30px auto no-repeat`,
  },
  instagram: {
    background: `url(${Instagram}) center center/30px auto no-repeat`,
  },
  youtube: {
    background: `url(${Youtube}) center center/30px auto no-repeat`,
  },
};

export default stylesSocLinks;
