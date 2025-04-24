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
    searchParams.set('search', debouncedSearch ? debouncedSearch : null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  return (
    <Flex flexDir='column' justify='center' textAlign='center' fontWeight='semibold' w='7/12' gap='8'>
      <Flex flexDir='column' gap='3.5'>
        <Text color='#D6E0FF' fontSize='lg' letterSpacing='10%' textTransform='uppercase'>
          Discover Your Next Great Read:
        </Text>

        <Text fontSize='3.5rem' lineHeight='shorter'>
          Explore and Search for{' '}
          <Text as='span' color='#FFE1BD'>
            Any Book
          </Text>{' '}
          In Our Library
        </Text>
      </Flex>

      <Box pos='relative'>
        <Box pos='absolute' top='50%' left='5' transform='translateY(-50%)' zIndex='docked'>
          <BiSearchAlt size='28' color='#FFE1BD' />
        </Box>

        <Input
          ps='14'
          h='4.25rem'
          fontSize='xl'
          fontWeight='semibold'
          onChange={e => setSearch(e.target.value)}
          value={search}
        />
      </Box>
    </Flex>
  );
};
