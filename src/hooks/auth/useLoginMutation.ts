import type { AxiosError, AxiosResponse } from 'axios';
import { type UseMutationOptions, useMutation } from '@tanstack/react-query';

import { rentlit } from '@/api';
import type { ErrorResponse, User } from '@/api/types';
import { setAccessToken } from '@/api/helpers';

interface LoginParams {
  email: string;
  password: string;
}

export const useLoginMutation = (options?: UseMutationOptions<User, AxiosError<ErrorResponse>, LoginParams>) =>
  useMutation<User, AxiosError<ErrorResponse>, LoginParams>({
    ...options,
    mutationFn: data =>
      rentlit.post<User, AxiosResponse<User>, LoginParams>('/auth/log-in', data).then(res => res.data),
    onSuccess: (...props) => {
      setAccessToken(props[0].token);

      options?.onSuccess?.(...props);
    },
  });
