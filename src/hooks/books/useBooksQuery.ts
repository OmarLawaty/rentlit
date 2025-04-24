import { AxiosResponse, type AxiosRequestConfig } from 'axios';
import { useQuery, type QueryFunctionContext } from '@tanstack/react-query';

import { rentlit } from '@/api';
import { Book, type PaginatedResponse } from '@/api/types';

type BooksResponse = PaginatedResponse<Book>;
type ReqOptions = Omit<AxiosRequestConfig, 'params'>;

interface BooksParams {
  search?: string;
  page?: number;
}

const queryKey = (params: BooksParams) => ['books', params] as const;

type QueryKey = ReturnType<typeof queryKey>;

const queryFn =
  (options?: ReqOptions) =>
  ({ queryKey: [, { search = undefined, page = 1 }] }: QueryFunctionContext<QueryKey>) =>
    rentlit
      .get<BooksResponse, AxiosResponse<BooksResponse>, BooksParams>('/books', {
        params: { page: Number(page) ?? 1, search, per_page: 12 },
        ...options,
      })
      .then(res => res.data);

export const useBooksQuery = (params: BooksParams, reqOptions?: ReqOptions) =>
  useQuery({ queryKey: queryKey(params), queryFn: queryFn(reqOptions), refetchOnWindowFocus: false });

useBooksQuery.queryKey = queryKey;
useBooksQuery.queryFn = queryFn;
