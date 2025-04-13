'use client';

import { Flex, type FlexProps } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

interface LoaderProps extends FlexProps {
  size?: string | number;
  color?: string;
}

export const Loader = ({ size = '24px', ...props }: LoaderProps) => (
  <Flex justify='center' align='center' animation={`${spin} 1s linear infinite`} fontSize='24px' {...props}>
    <AiOutlineLoading3Quarters size={size} color='currentColor' />
  </Flex>
);

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
