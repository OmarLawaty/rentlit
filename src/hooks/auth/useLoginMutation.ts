'use client';

import type { AxiosError, AxiosResponse } from 'axios';
import { type UseMutationOptions, useMutation } from '@tanstack/react-query';

import { rentlit } from '@/api';
import type { AuthUser, ErrorResponse } from '@/api/types';

import { useLogin } from './useLogin';

interface LoginParams {
  email: string;
  password: string;
}

export const useLoginMutation = (options?: UseMutationOptions<AuthUser, AxiosError<ErrorResponse>, LoginParams>) => {
  const { login } = useLogin();

  return useMutation<AuthUser, AxiosError<ErrorResponse>, LoginParams>({
    ...options,
    mutationFn: data =>
      rentlit.post<AuthUser, AxiosResponse<AuthUser>, LoginParams>('/auth/log-in', data).then(res => res.data),
    onSuccess: (...props) => {
      login(props[0].token);

      options?.onSuccess?.(...props);
    },
  });
};
