import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { FeaturedBook } from '@/components';
import { useFeaturedBookQuery } from '@/hooks';

export const metadata: Metadata = {
  title: 'Rentlit | Home',
  description: 'Welcome to Rentlit',
};

export default async function Home() {
  const queryClient = new QueryClient();

  const cookieStore = await cookies();
  const token = cookieStore.get('authToken')?.value;

  await queryClient.prefetchQuery({
    queryKey: useFeaturedBookQuery.queryKey,
    queryFn: useFeaturedBookQuery.queryFn({ headers: { Authorization: `Bearer ${token}` } }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FeaturedBook />
    </HydrationBoundary>
  );
}
