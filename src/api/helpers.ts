import cookies from 'js-cookie';

export const setAccessToken = (token: string) => {
  if (typeof window === 'undefined') return;

  cookies.set('authToken', token, { expires: 30, secure: true, sameSite: 'Lax' });
};

export const getAccessToken = () => {
  if (typeof window === 'undefined') return undefined;

  return cookies.get('authToken');
};

export const removeAccessToken = () => {
  if (typeof window === 'undefined') return;

  cookies.remove('authToken');
};
