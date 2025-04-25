import type { Metadata } from 'next';
import { Flex } from '@chakra-ui/react';
import { cookies } from 'next/headers';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { SearchHeader, SearchResults } from '@/components';
import { useBooksQuery } from '@/hooks';
import { getPageValue } from '@/utils/helpers';
import type { PagePropsWithSearchParams } from '@/types';

export const metadata: Metadata = {
  title: `Rentlit | Search`,
  description: 'Find your next book to read',
};

interface SearchParams {
  search: string | null;
  page: string | null;
}

export default async function Search({ searchParams }: PagePropsWithSearchParams<SearchParams>) {
  const queryClient = new QueryClient();

  const cookieStore = await cookies();
  const token = cookieStore.get('authToken')?.value;

  const { search, page } = await searchParams;
  await queryClient.prefetchQuery({
    queryKey: useBooksQuery.queryKey({ search: search ?? '', page: getPageValue(page) }),
    queryFn: useBooksQuery.queryFn({ headers: { Authorization: `Bearer ${token}` } }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Flex as='main' flexDir='column' align='center' gap={['8', '10', '12', '16']} flex='1'>
        <SearchHeader />

        <SearchResults />
      </Flex>
    </HydrationBoundary>
  );
}
