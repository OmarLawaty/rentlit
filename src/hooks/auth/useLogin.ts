'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { removeAccessToken, setAccessToken } from '@/api/helpers';

export const useLogin = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const login = async (token: string) => {
    setAccessToken(token);
    const fromEncodedPath = searchParams.get('from');
    if (fromEncodedPath) {
      return router.replace(decodeURIComponent(fromEncodedPath));
    }

    router.replace('/');
  };

  const logout = async () => {
    removeAccessToken();

    router.replace('/login');
  };

  return {
    login,
    logout,
  };
};
