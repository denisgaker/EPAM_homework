import * as React from 'react';
import { ImagePathType } from './ImageHelper.interface';

// ! Todo Сделать проверку на наличие изображения
const ImageHelper = ({ imagePath }: ImagePathType): React.ReactElement => <img src={imagePath} />;

export default ImageHelper;
