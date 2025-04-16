'use client';

import { Box } from '@chakra-ui/react';
import { useParams } from 'next/navigation';

import { useBookQuery } from '@/hooks';

import { BookInfo } from './BookInfo';

export const BookOverview = () => {
  const params = useParams<{ id: string }>();

  const bookQuery = useBookQuery(params.id);

  if (bookQuery.isPending) return null;
  if (bookQuery.isError) return <Box>Error: {bookQuery.error.message}</Box>;

  return <BookInfo {...bookQuery.data!} />;
};
