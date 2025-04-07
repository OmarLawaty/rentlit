import type { AxiosError } from 'axios';
import { type UseMutationOptions, useMutation } from '@tanstack/react-query';

import { rentlit } from '@/api';
import type { User } from '@/api/types';

interface SignUpParams {
  email: string;
  password: string;
  name: {
    first: string;
    last: string;
  };
}

export const useSignUpMutation = (options?: UseMutationOptions<User, AxiosError<unknown>, SignUpParams>) =>
  useMutation<User, AxiosError<unknown>, SignUpParams>({
    ...options,
    mutationFn: data => rentlit.post<User, User, SignUpParams>('/auth/sign-up', data).then(res => res),
  });
