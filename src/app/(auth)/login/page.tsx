import type { Metadata } from 'next';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import { Logo, Link, LoginForm } from '@/components';

export const metadata: Metadata = {
  title: 'Rentlit | Login',
  description: 'Login to Rentlit',
};

export default function Page() {
  return (
    <>
      <Flex as='header' flexDir='column' gap={['5', '6', '7', '8']}>
        <Logo />

        <Flex flexDir='column' gap='3'>
          <Heading as='h1' size={['lg', 'xl', '2xl', '3xl']} fontFamily='inherit' fontWeight='semibold'>
            Welcome Back to the Rentlit
          </Heading>

          <Text color='#D6E0FF' fontSize={['xs', 'sm', 'md', 'lg']}>
            Access the vast collection of resources, and stay updated
          </Text>
        </Flex>
      </Flex>

      <LoginForm />

      <Box as='footer' textAlign='center' fontSize={['xs', 'sm', 'md']}>
        Don&apos;t have an account already?{' '}
        <Link href='/sign-up' prefetch color='#E7C9A5' fontWeight='bold'>
          Register here
        </Link>
      </Box>
    </>
  );
}
