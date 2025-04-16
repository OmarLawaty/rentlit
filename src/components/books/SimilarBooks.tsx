'use client';

import { Flex, Heading } from '@chakra-ui/react';
import { useParams } from 'next/navigation';

import { useSimilarBooksQuery } from '@/hooks';
import type { Book } from '@/api/types';

import { BookCard } from './BookCard';

export const SimilarBooks = () => {
  const params = useParams<{ id: string }>();

  const similarBooksQuery = useSimilarBooksQuery(params.id);

  if (similarBooksQuery.isPending) return null;
  if (similarBooksQuery.isError) return <div>Error: {similarBooksQuery.error.message}</div>;

  return (
    <Flex as='section' flex='15' flexDir='column' gap={['2', '4', '6']}>
      <Heading as='h3' fontSize='3xl' color='#D6E0FF'>
        Similar Books
      </Heading>

      <SimilarBooksList similarBooks={similarBooksQuery.data!} />
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
    <Flex gap={['2', '4', '6']} flexWrap='wrap' justify='center' align='center'>
      {similarBooks.map(book => (
        <BookCard key={book._id} href={`/books/${book._id}`} type='minimal' w='36' {...book} />
      ))}
    </Flex>
  );
};
