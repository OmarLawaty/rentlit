import { Flex } from '@chakra-ui/react';

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Flex px='6.25rem' py='3.75rem' flexDir='column' gap='6.25rem' minH='100vh'>
      <header>Header</header>

      <Flex as='main' flex='1'>
        {children}
      </Flex>
    </Flex>
  );
}
