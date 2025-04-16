import { Button, Flex, Heading, Icon, Text, type FlexProps } from '@chakra-ui/react';
import { BiStar } from 'react-icons/bi';

import type { Book } from '@/api/types';

import { BookCover } from './BookCover';
import { BookOpenFilledIcon } from '@/assets';

type BookInfoProps = Omit<FlexProps, 'color' | 'title"> '> & Book;

export const BookInfo = ({
  color,
  cover,
  title,
  description,
  author,
  genres,
  rating,
  total_copies,
  available_copies,
  ...props
}: BookInfoProps) => (
  <Flex
    gap={['6', '10', null, null, '24']}
    flexDir={['column-reverse', null, null, 'row']}
    w='full'
    justify='space-between'
    align='center'
    h='fit'
    {...props}
  >
    <Flex flexDir='column' flex='38' gap='9' align={['center', null, null, 'start']}>
      <Flex flexDir='column' gap='6' color='#D6E0FF' fontSize={['sm', 'md', null, 'lg', 'xl']} lineHeight='1.4'>
        <Heading
          as='h2'
          color='white'
          fontSize={['3xl', '5xl', null, '7xl']}
          lineHeight='1.1'
          fontWeight='semibold'
          lineClamp='1'
          textAlign={['center', null, null, 'start']}
          title={title}
        >
          {title}
        </Heading>

        <Flex flexDir='column' gap='5'>
          <Flex gap='5' flexDir={['column', null, 'row']}>
            <Text>
              By{' '}
              <Text as='span' fontWeight='semibold' color='#EED1AC'>
                {author}
              </Text>
            </Text>

            <Text>
              Category:{' '}
              <Text as='span' fontWeight='semibold' color='#EED1AC'>
                {genres.join(' / ')}
              </Text>
            </Text>

            <Text whiteSpace='nowrap'>
              <Icon asChild>
                <BiStar />
              </Icon>{' '}
              <Text as='span' fontWeight='semibold' color='#EED1AC'>
                {rating}
              </Text>
              /5
            </Text>
          </Flex>

          <Flex gap='5' flexDir={['column', null, 'row']}>
            <Text>
              Total books:{' '}
              <Text as='span' fontWeight='semibold' color='#EED1AC'>
                {total_copies}
              </Text>
            </Text>

            <Text>
              Available books:{' '}
              <Text as='span' fontWeight='semibold' color='#EED1AC'>
                {available_copies}
              </Text>
            </Text>
          </Flex>
        </Flex>

        <Text lineHeight='1.6'>{description}</Text>
      </Flex>

      <Button
        w={['full', null, '50%', 'fit']}
        fontSize={['xs', 'sm', 'md', 'lg', 'xl']}
        fontWeight='normal'
        fontFamily='bookRequest'
        lineHeight='1'
        gap='1.5'
        px='5'
        py='4'
        alignItems='center'
      >
        <BookOpenFilledIcon />
        Borrow Book Request
      </Button>
    </Flex>

    <Flex pos='relative' minW='60' w={['50%', null, null, 'full']} flex='29'>
      <BookCover zIndex='2' color={color} image={cover} flex='1' />

      <BookCover
        display={['none', null, null, 'flex']}
        rotate='10deg'
        top='0.75rem'
        left='-20%'
        filter='blur(4px)'
        flex='1'
        zIndex='1'
        color={color}
        image={cover}
      />
    </Flex>
  </Flex>
);
