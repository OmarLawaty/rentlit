import { Box, Flex } from '@chakra-ui/react';

import { AuthBg } from '@/assets';

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Flex as='main' flexDir={['column-reverse', null, null, null, 'row']} flex='1' pos='relative'>
      <Flex flex='1' align='center' justify='center' p='4'>
        <Flex
          as='section'
          flexDir='column'
          gap={['6', '7', '8', '9']}
          p={['6', '7', '8', '9', '10']}
          rounded='1.25rem'
          bg='linear-gradient(180deg, rgba(18,20,29,1) 0%, rgba(18,21,31,1) 100%)'
          w={['clamp(20rem, 90vw, 45rem)', null, null, null, 'clamp(20rem, 39.5vw, 45rem)']}
          pos={['absolute', null, null, null, 'static']}
          top='7vh'
        >
          {children}
        </Flex>
      </Flex>

      <Box
        flex={['auto', null, null, null, '1']}
        minH={['none', null, null, null, 'svh']}
        h={['30vh', null, null, null, 'auto']}
        maxH={['80', null, null, null, 'none']}
        bgSize='cover'
        bgPos='center'
        bgImage={`url(${AuthBg.src})`}
      />
    </Flex>
  );
}
