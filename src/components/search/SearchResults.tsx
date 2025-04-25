'use client';

import { Flex, Grid, Heading, Text } from '@chakra-ui/react';

import { useBooksQuery, useSearchParam } from '@/hooks';
import { getPageValue } from '@/utils/helpers';
import type { Book } from '@/api/types';

import { BookCard } from '../books';
import { PaginationFooter } from '../pagination';
import { NoResultsFound } from './NoResultsFound';

export const SearchResults = () => {
  const searchParams = useSearchParam();
  const page = searchParams.get('page');
  const search = searchParams.get('search') ?? '';

  const booksQuery = useBooksQuery({ search, page: getPageValue(page) });

  if (booksQuery.isPending) return null;
  if (booksQuery.isError) return <div>Error: {booksQuery.error.message}</div>;

  return (
    <Flex flexDir='column' gap={['6', '8', '10', '12']} w='full' flex='1'>
      <Heading as='h2' fontSize={['xl', '2xl', null, '3xl']} fontWeight='semibold' color='#D6E0FF'>
        Search Results{' '}
        {!!search && (
          <>
            for{' '}
            <Text as='span' color='#FFE1BD'>
              {search}
            </Text>
          </>
        )}
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
  if (!books.length) return <NoResultsFound />;

  return (
    <Grid
      rowGap={['8', '10', '12', '14']}
      columnGap={['6', '8', '10', '12']}
      templateColumns={[
        'repeat(auto-fit, minmax(7rem, 1fr))',
        'repeat(auto-fit, minmax(8rem, 1fr))',
        null,
        'repeat(auto-fit, minmax(9rem, 1fr)))',
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
