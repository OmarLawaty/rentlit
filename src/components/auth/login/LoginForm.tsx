'use client';

import { Flex } from '@chakra-ui/react';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useLoginMutation } from '@/hooks';

import { schema, type SchemaType } from './schema';
import { Input } from '../../Input';
import { Button } from '../../Button';
import { Form } from '../../Form';

const defaultValues: SchemaType = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const form = useForm<SchemaType>({
    defaultValues,
    mode: 'onChange',
    resolver: zodResolver(schema),
  });
  const loginMutation = useLoginMutation();

  const onSubmit: SubmitHandler<SchemaType> = async data => {
    if (!form.formState.isValid || loginMutation.isPending) return;

    loginMutation.mutate(data, {
      onError: error => {
        if (error.response?.status === 401)
          form.setError('password', {
            type: 'custom',
            message: 'Invalid password',
          });
        if (error.response?.status === 404)
          form.setError('email', {
            type: 'custom',
            message: 'Email not found',
          });
      },
    });
  };

  return (
    <Form
      display='flex'
      flexDir='column'
      gap={['6', '7', '8', '9']}
      onSubmit={form.handleSubmit(onSubmit, console.warn)}
    >
      <Flex flexDir='column' gap='5'>
        <Controller
          name='email'
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              label='Email'
              type='email'
              autoComplete='email'
              placeholder='you@example.com'
              containerProps={{ invalid: fieldState.invalid }}
              errorText={fieldState.error?.message}
              {...field}
            />
          )}
        />

        <Controller
          name='password'
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              label='Password'
              type='password'
              autoComplete='new-password'
              placeholder='********'
              containerProps={{ invalid: fieldState.invalid }}
              errorText={fieldState.error?.message}
              {...field}
            />
          )}
        />
      </Flex>

      <Button
        type='submit'
        isDisabled={!form.formState.isValid || loginMutation.isSuccess}
        isLoading={loginMutation.isPending}
      >
        Login
      </Button>
    </Form>
  );
};
