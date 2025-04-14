import { Flex, Text, type FlexProps } from '@chakra-ui/react';

import type { Book } from '@/api/types';

import { BookCover } from './BookCover';

interface BookCardProps extends Omit<FlexProps, 'color' | 'title'>, Book {
  type?: 'minimal' | 'full';
}

export const BookCard = ({ color, cover, title, genre, type = 'full', ...props }: BookCardProps) => (
  <Flex flexDir='column' gap='4' w='44' {...props}>
    <BookCover color={color} image={cover} w='90%' />

    {type === 'full' && (
      <Flex flexDir='column' gap='2.5'>
        <Text fontWeight='semibold' fontSize='xl' lineHeight='shorter'>
          {title}
        </Text>

        <Text color='#D6E0FF' fontSize='md' lineHeight='shorter' fontStyle='italic'>
          {genre}
        </Text>
      </Flex>
    )}
  </Flex>
);
