'use client';

import { Button as ChakraButton, type ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import { Loader } from './Loader';

interface ButtonProps extends Omit<ChakraButtonProps, 'loading' | 'disabled'> {
  isLoading?: boolean;
  isDisabled?: boolean;
  icon?: React.ReactNode;
}

export const Button = ({ children, isLoading, isDisabled, ...props }: ButtonProps) => {
  if (isLoading)
    return (
      <ChakraButton disabled opacity='0.8' {...props}>
        <Loader />
      </ChakraButton>
    );

  return (
    <ChakraButton disabled={isDisabled} {...props}>
      {props.icon}

      {children}
    </ChakraButton>
  );
};
