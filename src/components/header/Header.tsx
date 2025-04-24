'use client';

import { Flex } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { BiHome, BiSearchAlt } from 'react-icons/bi';

import { Logo } from '../Logo';
import { Link } from '../Link';
import { Profile } from './Profile';

export const Header = () => {
  const pathname = usePathname();
  const currentPathColor = (path: string) => (pathname === path ? '#EED1AC' : 'inherit');
  const currentPathFontWeight = (path: string) => (pathname === path ? 'semibold' : 'normal');

  return (
    <Flex as='header' justify='space-between' align='center' w='full' gap={['4', '6', '8', '10']}>
      <Logo display={['none', 'flex']} />
      <Logo variant='icon' display={['flex', 'none']} />

      <Flex as='nav' gap={['4', '6', '8', '10']} fontSize='xl'>
        <Link
          href='/'
          display={['none', null, 'flex']}
          color={currentPathColor('/')}
          fontWeight={currentPathFontWeight('/')}
        >
          Home
        </Link>
        <Link
          href='/'
          display={['flex', null, 'none']}
          justifyContent='center'
          alignItems='center'
          color={currentPathColor('/')}
        >
          <BiHome size='24' />
        </Link>

        <Link
          href='/books'
          display={['none', null, 'flex']}
          color={currentPathColor('/books')}
          fontWeight={currentPathFontWeight('/books')}
        >
          Search
        </Link>
        <Link
          href='/books'
          display={['flex', null, 'none']}
          justifyContent='center'
          alignItems='center'
          color={currentPathColor('/books')}
        >
          <BiSearchAlt size='24' />
        </Link>

        <Profile />
      </Flex>
    </Flex>
  );
};
