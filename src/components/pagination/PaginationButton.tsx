import type { ButtonProps } from '@chakra-ui/react';

import { Button } from '../Button';

interface PaginationButtonProps extends ButtonProps {
  isActive?: boolean;
}

export const PaginationButton = ({ isActive, ...props }: PaginationButtonProps) => (
  <Button
    variant={isActive ? 'primary' : 'secondary'}
    w='12'
    h='auto'
    minH='auto'
    aspectRatio='square'
    fontSize='lg'
    p='1.5'
    {...props}
  />
);
