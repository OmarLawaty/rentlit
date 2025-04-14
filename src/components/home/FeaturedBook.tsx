'use client';

import { useFeaturedBookQuery } from '@/hooks';

import { BookInfo } from '../books';

export const FeaturedBook = () => {
  const featuredBookQuery = useFeaturedBookQuery();

  if (featuredBookQuery.isLoading) return <div>Loading...</div>;
  if (featuredBookQuery.isError) return <div>Error: {featuredBookQuery.error.message}</div>;

  return <BookInfo {...featuredBookQuery.data!} />;
};
