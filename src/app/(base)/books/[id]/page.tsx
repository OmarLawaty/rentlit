import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Flex } from '@chakra-ui/react';

import { BookOverview, BookSummary, SimilarBooks } from '@/components';
import { getBook, useBookQuery, useSimilarBooksQuery } from '@/hooks';
import type { PagePropsWithParams } from '@/types';

type BookProps = PagePropsWithParams<{ id: string }>;

export async function generateMetadata({ params }: BookProps): Promise<Metadata> {
  const id = (await params).id;

  const cookieStore = await cookies();
  const token = cookieStore.get('authToken')?.value;

  const bookTitle = await getBook(id, { headers: { Authorization: `Bearer ${token}` } })
    .then(res => res.title)
    .catch(() => 'Book not found');

  return {
    title: `Rentlit | ${bookTitle}`,
    description: 'See the details of the book',
  };
}

export default async function Book({ params }: BookProps) {
  const id = (await params).id;

  const queryClient = new QueryClient();

  const cookieStore = await cookies();
  const token = cookieStore.get('authToken')?.value;

  const [book] = await Promise.all([
    queryClient.fetchQuery({
      queryKey: useBookQuery.queryKey(id),
      queryFn: useBookQuery.queryFn({ headers: { Authorization: `Bearer ${token}` } }),
    }),
    queryClient.prefetchQuery({
      queryKey: useSimilarBooksQuery.queryKey(id),
      queryFn: useSimilarBooksQuery.queryFn({ headers: { Authorization: `Bearer ${token}` }, params: { limit: 6 } }),
    }),
  ]);

  if (!book?._id) return notFound();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Flex as='main' flex='1' flexDir='column' gap={['8', '12', '16', '20']}>
        <BookOverview />

        <Flex gap={['8', '12', '16', '20']} flexDir={['column', null, null, 'row']}>
          <BookSummary />

          <SimilarBooks />
        </Flex>
      </Flex>
    </HydrationBoundary>
  );
}
