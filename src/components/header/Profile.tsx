'use client';

import { useTransition } from 'react';
import { Flex, Text } from '@chakra-ui/react';

import { LogoutIcon } from '@/assets';
import { useLogin, useUserDataQuery } from '@/hooks';
import type { Name } from '@/api/types';

import { Button } from '../Button';
import { UserImage } from '../UserImage';
import { Link } from '../Link';
import { Loader } from '../Loader';

export const Profile = () => {
  const { logout } = useLogin();
  const [isPending, startTransition] = useTransition();

  const userDataQuery = useUserDataQuery('minimal');

  return (
    <Flex gap={['4', null, '6']} align='center'>
      {userDataQuery.isSuccess ? (
        <User image={userDataQuery.data.image} name={userDataQuery.data.name} />
      ) : (
        <User.Skeleton />
      )}

      <Button
        onClick={() => startTransition(logout)}
        isLoading={isPending}
        p='0'
        bg='transparent'
        color='#FF5969'
        w='auto'
        h='auto'
        minH='auto'
        minW='auto'
      >
        <LogoutIcon />
      </Button>
    </Flex>
  );
};

interface UserProps {
  image: string | null;
  name: Name;
}

const User = (props: UserProps) => {
  return (
    <Link href='/profile' display='flex' justifyContent='center' alignItems='center' gap='1.5'>
      <UserImage {...props} />

      <Text fontSize='xl' fontWeight='semibold' color='#D6E0FF' display={['none', null, 'block']}>
        {props.name.first}
      </Text>
    </Link>
  );
};

const UserSkeleton = () => (
  <Flex h={['6', '8']} w={['6', '8', '24']} rounded='full' bg='gray' justify='center' align='center'>
    <Loader size='14' />
  </Flex>
);

User.Skeleton = UserSkeleton;
