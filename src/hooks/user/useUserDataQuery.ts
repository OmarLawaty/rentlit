import { useQuery, type QueryFunctionContext } from '@tanstack/react-query';

import { rentlit } from '@/api';
import type { User } from '@/api/types';
import type { AxiosRequestConfig } from 'axios';

type UserDataStructure = 'minimal' | 'full';
type ReqOptions = Omit<AxiosRequestConfig, 'params'>;

const queryKey = (params: UserDataStructure) => ['user', params] as const;

type QueryKey = ReturnType<typeof queryKey>;

const queryFn =
  (options?: ReqOptions) =>
  ({ queryKey: [, structure] }: QueryFunctionContext<QueryKey>) =>
    rentlit.get<User<typeof structure>>('/user', { params: { structure }, ...options }).then(res => res.data);

export const useUserDataQuery = (structure: UserDataStructure = 'full', reqOptions?: ReqOptions) =>
  useQuery({ queryKey: queryKey(structure), queryFn: queryFn(reqOptions), refetchOnWindowFocus: false });

useUserDataQuery.queryKey = queryKey;
useUserDataQuery.queryFn = queryFn;
