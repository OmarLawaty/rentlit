import axios from 'axios';

export const rentlit = axios.create({
  baseURL: 'https://rentlit-backend.onrender.com/api/v1',
});
