import { Flex, Text } from '@chakra-ui/react';

import { NoResultsFoundIcon } from '@/assets';

export const NoResultsFound = () => (
  <Flex flexDir='column' gap='6' textAlign='center' align='center' w={['full', '3/4', '2/3', '32%']} mx='auto' py='8'>
    <NoResultsFoundIcon w={['36', '40', '44', '48', '12.5rem']} />

    <Flex flexDir='column' gap='3.5'>
      <Text fontWeight='semibold' fontSize={['md', 'lg', 'xl', '2xl']}>
        No Results Found
      </Text>

      <Text fontSize={['xs', 'sm', 'md']} color='#D6E0FF'>
        We could not find any books matching your search. Try using different keywords or check for typos.
      </Text>
    </Flex>
  </Flex>
);
