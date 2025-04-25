import type { ButtonProps } from '@chakra-ui/react';

import { Button } from '../Button';

interface PaginationButtonProps extends ButtonProps {
  isActive?: boolean;
}

export const PaginationButton = ({ isActive, ...props }: PaginationButtonProps) => (
  <Button
    variant={isActive ? 'primary' : 'secondary'}
    w={['7', '8', '10', '12']}
    h='auto'
    minW='auto'
    minH='auto'
    aspectRatio='square'
    fontSize={['sm', null, 'md', 'lg']}
    p={['0.5', null, '1', '1.5']}
    {...props}
  />
);
