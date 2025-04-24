'use client';

import { Flex, Grid, Heading } from '@chakra-ui/react';

import { useBooksQuery, useSearchParam } from '@/hooks';
import { getPageValue } from '@/utils/helpers';
import type { Book } from '@/api/types';

import { BookCard } from '../books';
import { PaginationFooter } from '../pagination';

export const SearchResults = () => {
  const searchParams = useSearchParam();
  const page = searchParams.get('page');
  const search = searchParams.get('search') ?? '';

  const booksQuery = useBooksQuery({ search, page: getPageValue(page) });

  if (booksQuery.isPending) return null;
  if (booksQuery.isError) return <div>Error: {booksQuery.error.message}</div>;

  return (
    <Flex flexDir='column' gap='12' w='full' flex='1'>
      <Heading as='h2' fontSize={['xl', '2xl', null, '3xl']} fontWeight='semibold' color='#D6E0FF'>
        Search Results
      </Heading>

      <SearchResultsList books={booksQuery.data.results} />

      <PaginationFooter {...booksQuery.data.meta} />
    </Flex>
  );
};

interface BooksListProps {
  books: Book[];
}

const SearchResultsList = ({ books }: BooksListProps) => {
  if (!books.length)
    return (
      <Flex flex='1' justify='center' align='center' minH='52'>
        No similar books found
      </Flex>
    );

  return (
    <Grid
      rowGap='14'
      columnGap='12'
      templateColumns={[
        'repeat(auto-fit, minmax(7rem, 1fr))',
        'repeat(auto-fit, 8rem)',
        null,
        'repeat(auto-fit, 9rem)',
        'repeat(6, 1fr)',
      ]}
      justifyItems='center'
      placeContent={['center', 'start']}
      flex='1'
    >
      {books.map(book => (
        <BookCard key={book._id} href={`/books/${book._id}`} w='auto' maxW={['36', null, null, null, '48']} {...book} />
      ))}
    </Grid>
  );
};
