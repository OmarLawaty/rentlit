import axios from 'axios';
import { getAccessToken } from './helpers';

export const rentlit = axios.create({
  baseURL: 'https://rentlit-backend.onrender.com/api/v1',
});

rentlit.interceptors.request.use(config => {
  const token = getAccessToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});
