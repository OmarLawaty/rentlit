'use client';

import { useRouter } from 'nextjs-toploader/app';

import { removeAccessToken, setAccessToken } from '@/api/helpers';
import { getSearchParams } from '@/utils/helpers';

export const useLogin = () => {
  const router = useRouter();
  const searchParams = getSearchParams();

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
