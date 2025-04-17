'use client';

import { Flex, Grid, Heading } from '@chakra-ui/react';
import { useParams } from 'next/navigation';

import { useSimilarBooksQuery } from '@/hooks';
import type { Book } from '@/api/types';

import { BookCard } from './BookCard';

export const SimilarBooks = () => {
  const params = useParams<{ id: string }>();

  const similarBooksQuery = useSimilarBooksQuery({ id: params.id, limit: 6 });

  if (similarBooksQuery.isPending) return null;
  if (similarBooksQuery.isError) return <div>Error: {similarBooksQuery.error.message}</div>;

  return (
    <Flex as='section' flex='15' flexDir='column' gap={['4', '6']}>
      <Heading as='h3' fontSize={['xl', '2xl', null, '3xl']} color='#D6E0FF'>
        Similar Books
      </Heading>

      <SimilarBooksList similarBooks={similarBooksQuery.data} />
    </Flex>
  );
};

interface BooksListProps {
  similarBooks: Book[];
}

const SimilarBooksList = ({ similarBooks }: BooksListProps) => {
  if (!similarBooks.length)
    return (
      <Flex flex='1' justify='center' align='center' minH='52'>
        No similar books found
      </Flex>
    );

  return (
    <Grid
      gap='6'
      templateColumns={[
        'repeat(auto-fit, minmax(7rem, 1fr))',
        'repeat(auto-fit, 8rem)',
        null,
        'repeat(auto-fit, 9rem)',
        'repeat(3, 1fr)',
      ]}
      justifyItems='center'
      placeContent={['center', 'start']}
    >
      {similarBooks.map(book => (
        <BookCard
          key={book._id}
          href={`/books/${book._id}`}
          type='minimal'
          w='auto'
          maxW={['36', null, null, null, '48']}
          {...book}
        />
      ))}
    </Grid>
  );
};
