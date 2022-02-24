import React from 'react';
import { ContainerPadding } from './styles';
import { ContentContainerProps } from './types';

function ContentContainer({ children }: ContentContainerProps) {
  return <ContainerPadding>{children}</ContainerPadding>;
}

export default ContentContainer;
