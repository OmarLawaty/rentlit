'use client';

import { useState } from 'react';
import { Flex } from '@chakra-ui/react';

import type { Name } from '@/api/types';

import { Image } from './Image';

interface UserImageProps {
  name: Name;
  image: string | null;
}

export const UserImage = ({ image, name }: UserImageProps) => {
  const [isImageError, setIsImageError] = useState(false);

  const fullName = `${name.first} ${name.last}`;
  const initials = fullName
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();

  return (
    <Flex>
      {!isImageError && (
        <Image
          src={image!}
          alt=''
          onError={() => setIsImageError(true)}
          width='32'
          height='32'
          w={['6', null, '8']}
          aspectRatio='square'
        />
      )}

      {isImageError && (
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
