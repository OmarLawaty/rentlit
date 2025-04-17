import { AxiosResponse, type AxiosRequestConfig } from 'axios';
import { useQuery, type QueryFunctionContext } from '@tanstack/react-query';

import { rentlit } from '@/api';
import type { Book } from '@/api/types';

interface SimilarBooksQueryOptions {
  id: string;
  limit?: number;
}

const queryKey = (id: string) => ['books', 'similar', id] as const;

type QueryKey = ReturnType<typeof queryKey>;

const queryFn =
  (options?: AxiosRequestConfig) =>
  ({ queryKey: [, , id] }: QueryFunctionContext<QueryKey>) =>
    rentlit
      .get<Book[], AxiosResponse<Book[]>, SimilarBooksQueryOptions>(`/books/${id}/similar`, options)
      .then(res => res.data);

export const useSimilarBooksQuery = ({ id, ...params }: SimilarBooksQueryOptions, reqOptions?: AxiosRequestConfig) =>
  useQuery({ queryKey: queryKey(id), queryFn: queryFn({ ...reqOptions, params }) });

useSimilarBooksQuery.queryKey = queryKey;
useSimilarBooksQuery.queryFn = queryFn;
