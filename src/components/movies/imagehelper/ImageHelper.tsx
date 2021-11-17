import NoImage from '../img/noImage.jpg';

const ImageHelper = (c: string) => {
  const images = document.querySelectorAll(`.${c} img`);
  for (let i = 0; i < images.length; i += 1) {
    if (images[i].clientHeight === 0) images[i].attributes[0].value = NoImage;
  }
};

export default ImageHelper;
