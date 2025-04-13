'use client';

import type { AxiosError, AxiosResponse } from 'axios';
import { type UseMutationOptions, useMutation } from '@tanstack/react-query';

import { rentlit } from '@/api';
import type { ErrorResponse, AuthUser } from '@/api/types';

import { useLogin } from './useLogin';

interface SignUpParams {
  email: string;
  password: string;
  name: {
    first: string;
    last: string;
  };
}

export const useSignUpMutation = (options?: UseMutationOptions<AuthUser, AxiosError<ErrorResponse>, SignUpParams>) => {
  const { login } = useLogin();

  return useMutation<AuthUser, AxiosError<ErrorResponse>, SignUpParams>({
    ...options,
    mutationFn: data =>
      rentlit.post<AuthUser, AxiosResponse<AuthUser>, SignUpParams>('/auth/sign-up', data).then(res => res.data),
    onSuccess: (...props) => {
      login(props[0].token);

      options?.onSuccess?.(...props);
    },
  });
};
