'use client';

import { chakra } from '@chakra-ui/react';
import NextLink from 'next/link';

export const Link = chakra(
  NextLink,
  {},
  {
    shouldForwardProp: props => ['href', 'prefetch', 'target', 'children'].includes(props),
  }
);
