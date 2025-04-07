'use client';

import { Flex } from '@chakra-ui/react';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useSignUpMutation } from '@/hooks';

import { schema, type SchemaType } from './schema';
import { Input } from '../../Input';
import { Button } from '../../Button';
import { Form } from '../../Form';

const defaultValues: SchemaType = {
  name: {
    first: '',
    last: '',
  },
  email: '',
  password: '',
};

export const SignUpForm = () => {
  const form = useForm<SchemaType>({
    defaultValues,
    mode: 'onChange',
    resolver: zodResolver(schema),
  });
  const signUpMutation = useSignUpMutation();

  const onSubmit: SubmitHandler<SchemaType> = async data => {
    if (!form.formState.isValid || signUpMutation.isPending) return;

    signUpMutation.mutate(data);
  };

  return (
    <Form display='flex' flexDir='column' gap='9' onSubmit={form.handleSubmit(onSubmit, console.warn)}>
      <Flex flexDir='column' gap='5'>
        <Flex gap='4'>
          <Controller
            name='name.first'
            control={form.control}
            render={({ field, fieldState }) => (
              <Input
                label='First Name'
                autoComplete='given-name'
                placeholder='John'
                containerProps={{ invalid: fieldState.invalid }}
                errorText={fieldState.error?.message}
                {...field}
              />
            )}
          />

          <Controller
            name='name.last'
            control={form.control}
            render={({ field, fieldState }) => (
              <Input
                label='Last Name'
                autoComplete='family-name'
                placeholder='Doe'
                containerProps={{ invalid: fieldState.invalid }}
                errorText={fieldState.error?.message}
                {...field}
              />
            )}
          />
        </Flex>

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

      <Button type='submit' isDisabled={!form.formState.isValid} isLoading={signUpMutation.isPending}>
        Sign Up
      </Button>
    </Form>
  );
};
