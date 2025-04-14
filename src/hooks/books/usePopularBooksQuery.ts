import type { AxiosRequestConfig } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { rentlit } from '@/api';
import type { Book } from '@/api/types';

type ReqOptions = Omit<AxiosRequestConfig, 'params'>;

const queryKey = ['books', 'popular-books'] as const;

const queryFn = (options?: ReqOptions) => () => rentlit.get<Book[]>('/books/popular', options).then(res => res.data);

export const usePopularBooksQuery = (reqOptions?: ReqOptions) => useQuery({ queryKey, queryFn: queryFn(reqOptions) });

usePopularBooksQuery.queryKey = queryKey;
usePopularBooksQuery.queryFn = queryFn;
