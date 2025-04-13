'use client';

import { useRouter } from 'next/navigation';

import { removeAccessToken, setAccessToken } from '@/api/helpers';

export const useLogin = () => {
  const router = useRouter();

  const login = async (token: string) => {
    setAccessToken(token);

    router.push('/');
  };

  const logout = async () => {
    removeAccessToken();

    router.push('/login');
  };

  return {
    login,
    logout,
  };
};
