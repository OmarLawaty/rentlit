'use client';

import { Box, Flex, Text } from '@chakra-ui/react';
import { BiSearchAlt } from 'react-icons/bi';
import { useEffect, useState } from 'react';

import { useDebounce, useSearchParam } from '@/hooks';

import { Input } from '../Input';

export const SearchHeader = () => {
  const searchParams = useSearchParam();
  const [search, setSearch] = useState(searchParams.get('search') || '');

  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    searchParams.set({ search: debouncedSearch, page: undefined });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  return (
    <Flex
      flexDir='column'
      justify='center'
      textAlign='center'
      fontWeight='semibold'
      w={['11/12', '10/12', null, '9/12', '7/12']}
      gap={['6', '8']}
    >
      <Flex flexDir='column' gap={['2.5', '3.5']}>
        <Text
          color='#D6E0FF'
          fontSize={['2xs', 'xs', 'sm', 'md', null, 'lg']}
          letterSpacing='10%'
          textTransform='uppercase'
        >
          Discover Your Next Great Read:
        </Text>

        <Text fontSize={['2xl', '3xl', '4xl', '5xl', null, '3.5rem']} lineHeight='shorter'>
          Explore and Search for{' '}
          <Text as='span' color='#FFE1BD'>
            Any Book
          </Text>{' '}
          In Our Library
        </Text>
      </Flex>

      <Box pos='relative'>
        <Box
          pos='absolute'
          top='50%'
          left={['3', null, '4', '5']}
          transform='translateY(-50%)'
          zIndex='docked'
          fontSize={['xl', '2xl', '3xl']}
        >
          <BiSearchAlt color='#FFE1BD' />
        </Box>

        <Input
          ps={['10', '12', '14']}
          h={['12', '14', '4.25rem']}
          fontSize={['sm', 'md', 'lg', null, 'xl']}
          fontWeight='semibold'
          onChange={e => setSearch(e.target.value)}
          value={search}
          placeholder='Search for books, genres...'
        />
      </Box>
    </Flex>
  );
};
