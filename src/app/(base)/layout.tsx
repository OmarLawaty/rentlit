import { Flex } from '@chakra-ui/react';

import { Header } from '@/components';

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Flex px='6.25rem' py='3.75rem' flexDir='column' gap='8' minH='100vh'>
      <Header />

      <Flex as='main' flex='1'>
        {children}
      </Flex>
    </Flex>
  );
}
