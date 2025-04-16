import { AxiosResponse, type AxiosRequestConfig } from 'axios';
import { useQuery, type QueryFunctionContext } from '@tanstack/react-query';

import { rentlit } from '@/api';
import type { Book } from '@/api/types';

const queryKey = (id: string) => ['books', 'similar', id] as const;

type QueryKey = ReturnType<typeof queryKey>;

const queryFn =
  (options?: AxiosRequestConfig) =>
  ({ queryKey: [, , id] }: QueryFunctionContext<QueryKey>) =>
    rentlit.get<Book[], AxiosResponse<Book[]>, string>(`/books/${id}/similar`, options).then(res => res.data);

export const useSimilarBooksQuery = (id: string, reqOptions?: AxiosRequestConfig) =>
  useQuery({ queryKey: queryKey(id), queryFn: queryFn(reqOptions) });

useSimilarBooksQuery.queryKey = queryKey;
useSimilarBooksQuery.queryFn = queryFn;
