import * as React from 'react';
import { ImagePathType } from './ImageHelper.interface';

const ImageHelper = ({ imagePath }: ImagePathType): React.ReactElement => {
  // ! Todo Сделать проверку на наличие изображения
  return <img src={imagePath} />;
};

export default ImageHelper;
