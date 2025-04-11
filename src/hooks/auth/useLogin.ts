'use client';

import { useRouter } from 'next/navigation';

import { setAccessToken } from '@/api/helpers';

export const useLogin = () => {
  const router = useRouter();

  const login = async (token: string) => {
    setAccessToken(token);

    router.push('/');

    return true;
  };

  const logout = async () => {
    setAccessToken('');

    router.push('/login');

    return true;
  };

  return {
    login,
    logout,
  };
};
