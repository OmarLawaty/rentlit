import { Flex, type FlexProps } from '@chakra-ui/react';

import { BookCardBase } from '@/assets';

import { Image } from '../Image';

interface BookCoverProps extends FlexProps {
  image: string;
  color: string;
}

export const BookCover = ({ image, color, ...props }: BookCoverProps) => (
  <Flex pos='relative' w='36' {...props}>
    <BookCardBase color={color} />

    <Flex pos='absolute' top='0' right='0.5' w='87%' h='87%' overflow='hidden' roundedEnd='lg' justify='center'>
      <Image src={image} alt='' width='126' height='174' w='full' />
    </Flex>
  </Flex>
);
