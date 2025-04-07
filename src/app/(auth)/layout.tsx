import { Box, Flex } from '@chakra-ui/react';

import { AuthBg } from '@/assets';

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Flex as='main' flex='1'>
      <Flex flex='1' align='center' justify='center' p='4'>
        <Flex
          as='section'
          flexDir='column'
          gap='9'
          p='10'
          rounded='1.25rem'
          bg='linear-gradient(180deg, rgba(18,20,29,1) 0%, rgba(18,21,31,1) 100%)'
          w='clamp(20rem, 39.5vw, 45rem)'
        >
          {children}
        </Flex>
      </Flex>

      <Box flex='1' minH='svh' bgSize='cover' bgPos='center' bgImage={`url(${AuthBg.src})`} />
    </Flex>
  );
}
