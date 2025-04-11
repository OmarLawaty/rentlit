'use client';

import type { AxiosError, AxiosResponse } from 'axios';
import { type UseMutationOptions, useMutation } from '@tanstack/react-query';

import { rentlit } from '@/api';
import type { ErrorResponse, User } from '@/api/types';

import { useLogin } from './useLogin';

interface SignUpParams {
  email: string;
  password: string;
  name: {
    first: string;
    last: string;
  };
}

export const useSignUpMutation = (options?: UseMutationOptions<User, AxiosError<ErrorResponse>, SignUpParams>) => {
  const { login } = useLogin();

  return useMutation<User, AxiosError<ErrorResponse>, SignUpParams>({
    ...options,
    mutationFn: data =>
      rentlit.post<User, AxiosResponse<User>, SignUpParams>('/auth/sign-up', data).then(res => res.data),
    onSuccess: (...props) => {
      login(props[0].token);

      options?.onSuccess?.(...props);
    },
  });
};
