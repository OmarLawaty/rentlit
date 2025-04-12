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

  return (
    <Flex as='header' justify='space-between' align='center' w='full' gap={['4', '6', '8', '10']}>
      <Logo display={['none', 'flex']} />
      <Logo variant='icon' display={['flex', 'none']} />

      <Flex as='nav' gap={['4', '6', '8', '10']} fontSize='xl'>
        <Link href='/' display={['none', null, 'flex']} color={currentPathColor('/')} fontWeight='semibold'>
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

        <Link href='/search' display={['none', null, 'flex']} color={currentPathColor('/search')}>
          Search
        </Link>
        <Link
          href='/search'
          display={['flex', null, 'none']}
          justifyContent='center'
          alignItems='center'
          color={currentPathColor('/search')}
        >
          <BiSearchAlt size='24' />
        </Link>

        <Profile />
      </Flex>
    </Flex>
  );
};
