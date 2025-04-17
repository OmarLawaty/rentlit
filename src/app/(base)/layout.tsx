import { Flex } from '@chakra-ui/react';
import { cookies } from 'next/headers';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { Header } from '@/components';
import { useUserDataQuery } from '@/hooks';

export default async function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const queryClient = new QueryClient();

  const cookieStore = await cookies();
  const token = cookieStore.get('authToken')?.value;

  await queryClient.prefetchQuery({
    queryKey: useUserDataQuery.queryKey('minimal'),
    queryFn: useUserDataQuery.queryFn({ headers: { Authorization: `Bearer ${token}` } }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Flex
        px={['6', '10', '14', '20', '6.25rem']}
        py={['8', '10', '12', '3.75rem']}
        flexDir='column'
        gap={['8', '12', '16', '20']}
        minH='100vh'
      >
        <Header />

        {children}
      </Flex>
    </HydrationBoundary>
  );
}
