import React from 'react';
import { Image } from './styles';
import { ImageProps } from './types';

function ImageCursom({ src, alt, maxWidth, maxHeight }: ImageProps) {
  return (
    <Image src={src} alt={alt} maxWidth={maxWidth} maxHeight={maxHeight} />
  );
}

export default ImageCursom;
