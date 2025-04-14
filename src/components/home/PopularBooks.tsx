'use client';

import { Box, Flex, Heading } from '@chakra-ui/react';

import { usePopularBooksQuery } from '@/hooks';

import { BookCard } from '../books';

export const PopularBooks = () => {
  const popularBooksQuery = usePopularBooksQuery();

  if (popularBooksQuery.isPending) return null;
  if (popularBooksQuery.isError) return <Box>Error: {popularBooksQuery.error.message}</Box>;

  return (
    <Flex as='section' flexDir='column' gap={['8', null, '12']}>
      <Heading as='h3' fontSize='3xl' fontWeight='semibold' color='#D6E0FF'>
        Popular Books
      </Heading>

      <Flex flex='1' gap={['8', '10', null, '14']} flexWrap='wrap' justifyContent='center'>
        {popularBooksQuery.data.map(book => (
          <BookCard
            key={book._id}
            flex={['unset', null, null, null, '1']}
            minW={['14', '20', '28', '32']}
            w={['80%', '44']}
            href={`/book/${book._id}`}
            {...book}
          />
        ))}
      </Flex>
    </Flex>
  );
};
