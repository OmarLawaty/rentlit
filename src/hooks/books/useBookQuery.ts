import { AxiosResponse, type AxiosRequestConfig } from 'axios';
import { useQuery, type QueryFunctionContext } from '@tanstack/react-query';

import { rentlit } from '@/api';
import type { Book } from '@/api/types';

const queryKey = (id: string) => ['books', id] as const;

type QueryKey = ReturnType<typeof queryKey>;

const queryFn =
  (options?: AxiosRequestConfig) =>
  ({ queryKey: [, id] }: QueryFunctionContext<QueryKey>) =>
    getBook(id, options);

export const useBookQuery = (id: string, reqOptions?: AxiosRequestConfig) =>
  useQuery({ queryKey: queryKey(id), queryFn: queryFn(reqOptions) });

useBookQuery.queryKey = queryKey;
useBookQuery.queryFn = queryFn;

export const getBook = (id: string, reqOptions?: AxiosRequestConfig) =>
  rentlit.get<Book, AxiosResponse<Book>, string>(`/books/${id}`, reqOptions).then(res => res.data);
