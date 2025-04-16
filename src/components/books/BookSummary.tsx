'use client';

import { useParams } from 'next/navigation';
import { Flex, Heading, Text } from '@chakra-ui/react';

import { useBookQuery } from '@/hooks';

export const BookSummary = () => {
  const params = useParams<{ id: string }>();

  const bookQuery = useBookQuery(params.id);

  if (bookQuery.isPending) return null;
  if (bookQuery.isError) return <div>Error: {bookQuery.error.message}</div>;

  return (
    <Flex as='section' flex='20' flexDir='column' gap={['2', '4', '6']}>
      <Heading as='h3' fontSize='3xl' color='#D6E0FF'>
        Summary
      </Heading>

      <Text>{bookQuery.data!.summary}</Text>
    </Flex>
  );
};
