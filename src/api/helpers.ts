export const setAccessToken = (token: string) => {
  if (typeof window === 'undefined') return;

  localStorage.setItem('accessToken', token);
};

export const getAccessToken = () => {
  if (typeof window === 'undefined') return null;

  return localStorage.getItem('accessToken');
};

export const removeAccessToken = () => {
  if (typeof window === 'undefined') return;

  localStorage.removeItem('accessToken');
};
