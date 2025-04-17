import { Flex } from '@chakra-ui/react';

import type { Name } from '@/api/types';

import { Image } from './Image';

interface UserImageProps {
  name: Name;
  image: string | null;
}

export const UserImage = ({ image, name }: UserImageProps) => {
  const fullName = `${name.first} ${name.last}`;
  const initials = fullName
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();

  return (
    <Flex>
      {image ? (
        <Image
          src={image!}
          alt=''
          width='32'
          height='32'
          w={['6', null, '8']}
          aspectRatio='square'
          rounded='full'
          priority
          loading='eager'
        />
      ) : (
        <Flex
          w={['6', null, '8']}
          aspectRatio='square'
          justifyContent='center'
          alignItems='center'
          rounded='full'
          bg='#ACDDEE'
          fontSize={['xs', 'sm', 'md']}
          fontWeight='bold'
          color='#111624'
        >
          {initials}
        </Flex>
      )}
    </Flex>
  );
};
