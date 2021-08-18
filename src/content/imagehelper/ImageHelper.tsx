import * as React from 'react';
import { ImagePathType } from './ImageHelper.interface';

const ImageHelper = ({ imagePath }: ImagePathType) => {
  return <img src={imagePath} />;
};

export default ImageHelper;
