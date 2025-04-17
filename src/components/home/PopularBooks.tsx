'use client';

import { Box, Flex, Grid, Heading } from '@chakra-ui/react';

import { usePopularBooksQuery } from '@/hooks';

import { BookCard } from '../books';

export const PopularBooks = () => {
  const popularBooksQuery = usePopularBooksQuery();

  if (popularBooksQuery.isPending) return null;
  if (popularBooksQuery.isError) return <Box>Error: {popularBooksQuery.error.message}</Box>;

  return (
    <Flex as='section' flexDir='column' gap={['8', null, '12']}>
      <Heading as='h3' fontSize={['xl', '2xl', null, '3xl']} fontWeight='semibold' color='#D6E0FF'>
        Popular Books
      </Heading>

      <Grid
        flex='1'
        gap={['4', '8', '10', null, '14']}
        templateColumns={[
          'repeat(auto-fit, minmax(7rem, 1fr))',
          'repeat(auto-fit, minmax(8rem, 1fr))',
          null,
          'repeat(auto-fit, minmax(9rem, 1fr))',
        ]}
        justifyItems='center'
        placeContent={['center', 'start']}
      >
        {popularBooksQuery.data.map(book => (
          <BookCard
            key={book._id}
            maxW={['36', null, null, null, '48']}
            w='auto'
            href={`/books/${book._id}`}
            {...book}
          />
        ))}
      </Grid>
    </Flex>
  );
};
