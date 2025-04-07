import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import { SignUpForm, Logo, Link } from '@/components';

export default function Page() {
  return (
    <>
      <Flex as='header' flexDir='column' gap='8'>
        <Logo />

        <Flex flexDir='column' gap='3'>
          <Heading as='h1' size='3xl' fontFamily='inherit' fontWeight='semibold'>
            Create Your Library Account
          </Heading>

          <Text color='#D6E0FF' fontSize='lg'>
            Please complete all fields and upload a valid university ID to gain access to the library
          </Text>
        </Flex>
      </Flex>

      <SignUpForm />

      <Box as='footer' textAlign={'center'}>
        Have an account already?{' '}
        <Link href='/login' prefetch color='#E7C9A5' fontWeight='bold'>
          Login
        </Link>
      </Box>
    </>
  );
}
