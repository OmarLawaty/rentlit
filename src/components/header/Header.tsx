'use client';

import { Flex } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';

import { Logo } from '../Logo';
import { Link } from '../Link';
import { Profile } from './Profile';

export const Header = () => {
  const pathname = usePathname();
  const currentPathColor = (path: string) => (pathname === path ? '#EED1AC' : 'inherit');

  return (
    <Flex as='header' justify='space-between' align='center' w='full' gap='8'>
      <Logo />

      <Flex as='nav' gap='8' fontSize='xl'>
        <Link href='/' color={currentPathColor('/')} fontWeight='semibold'>
          Home
        </Link>

        <Link href='/search' color={currentPathColor('/search')}>
          Search
        </Link>

        <Profile />
      </Flex>
    </Flex>
  );
};
