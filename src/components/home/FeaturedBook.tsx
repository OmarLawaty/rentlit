'use client';

import { Box } from '@chakra-ui/react';

import { useFeaturedBookQuery } from '@/hooks';

import { BookInfo } from '../books';

export const FeaturedBook = () => {
  const featuredBookQuery = useFeaturedBookQuery();

  if (featuredBookQuery.isLoading) return null;
  if (featuredBookQuery.isError) return <Box>Error: {featuredBookQuery.error.message}</Box>;

  return <BookInfo {...featuredBookQuery.data!} />;
};
