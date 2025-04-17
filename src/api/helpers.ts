import cookies from 'js-cookie';

import { isClient } from '@/utils/helpers';

export const setAccessToken = (token: string) => {
  if (!isClient()) return;

  cookies.set('authToken', token, { expires: 30, secure: true, sameSite: 'Lax' });
};

export const getAccessToken = () => {
  if (!isClient()) return undefined;

  return cookies.get('authToken');
};

export const removeAccessToken = () => {
  if (!isClient()) return;

  cookies.remove('authToken');
};
