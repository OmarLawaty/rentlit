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
    <Flex as='section' flex='20' flexDir='column' gap={['2', '4', '6']} color='#D6E0FF'>
      <Heading as='h3' fontSize={['xl', '2xl', null, '3xl']}>
        Summary
      </Heading>

      <Text fontSize={['sm', 'md', null, 'xl']}>{bookQuery.data.summary}</Text>
    </Flex>
  );
};
