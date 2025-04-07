'use client';

import { chakra } from '@chakra-ui/react';

export const Form = chakra(
  'form',
  {},
  {
    shouldForwardProp: props => ['onSubmit', 'children'].includes(props),
  }
);
