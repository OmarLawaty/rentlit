import type { AxiosRequestConfig } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { rentlit } from '@/api';
import type { Book } from '@/api/types';

type ReqOptions = Omit<AxiosRequestConfig, 'params'>;

const queryKey = ['books', 'featured'] as const;

const queryFn = (options?: ReqOptions) => () => rentlit.get<Book>('/books/featured', options).then(res => res.data);

export const useFeaturedBookQuery = (reqOptions?: ReqOptions) => useQuery({ queryKey, queryFn: queryFn(reqOptions) });

useFeaturedBookQuery.queryKey = queryKey;
useFeaturedBookQuery.queryFn = queryFn;
