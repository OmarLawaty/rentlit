import { rentlit } from '@/api';

export const checkTokenValidity = async (token: string) =>
  rentlit
    .get<boolean>('/auth/check-token', { headers: { Authorization: `Bearer ${token}` } })
    .then(res => res.data)
    .catch(() => false);
