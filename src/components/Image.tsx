'use client';

import NextImage from 'next/image';
import { chakra } from '@chakra-ui/react';

export const Image = chakra(
  NextImage,
  {},
  {
    shouldForwardProp: props =>
      ['src', 'alt', 'width', 'height', 'layout', 'priority', 'quality', 'title', 'onError', 'loading'].includes(props),
  }
);
