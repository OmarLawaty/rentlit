import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Flex } from '@chakra-ui/react';

import { FeaturedBook, PopularBooks } from '@/components';
import { useFeaturedBookQuery, usePopularBooksQuery } from '@/hooks';

export const metadata: Metadata = {
  title: 'Rentlit | Home',
  description: 'Welcome to Rentlit',
};

export default async function Home() {
  const queryClient = new QueryClient();

  const cookieStore = await cookies();
  const token = cookieStore.get('authToken')?.value;

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: useFeaturedBookQuery.queryKey,
      queryFn: useFeaturedBookQuery.queryFn({ headers: { Authorization: `Bearer ${token}` } }),
    }),
    queryClient.prefetchQuery({
      queryKey: usePopularBooksQuery.queryKey,
      queryFn: usePopularBooksQuery.queryFn({ headers: { Authorization: `Bearer ${token}` } }),
    }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Flex as='main' flex='1' flexDir='column' gap={['12', '16', '20']}>
        <FeaturedBook />

        <PopularBooks />
      </Flex>
    </HydrationBoundary>
  );
}
