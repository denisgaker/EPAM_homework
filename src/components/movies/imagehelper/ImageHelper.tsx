import * as React from 'react';
import { ImagePathProps } from './ImageHelper.interface';

// ! Todo Сделать проверку на наличие изображения
const ImageHelper = ({ path }: ImagePathProps): React.ReactElement => <img src={path} />;

export default ImageHelper;
