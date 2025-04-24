import { useQuery, type QueryFunctionContext } from '@tanstack/react-query';
import type { AxiosRequestConfig } from 'axios';

import { rentlit } from '@/api';
import type { User } from '@/api/types';

type UserDataStructure = 'minimal' | 'full';
type ReqOptions = Omit<AxiosRequestConfig, 'params'>;

const queryKey = (params: UserDataStructure) => ['user', params] as const;

type QueryKey = ReturnType<typeof queryKey>;

const queryFn =
  (options?: ReqOptions) =>
  <Structure>({ queryKey: [, structure = 'full'] }: QueryFunctionContext<QueryKey>) =>
    rentlit.get<User<Structure>>('/user', { params: { structure }, ...options }).then(res => res.data);

export const useUserDataQuery = <Structure extends UserDataStructure = 'full'>(
  structure: Structure = 'full' as Structure,
  reqOptions?: ReqOptions
) => useQuery({ queryKey: queryKey(structure), queryFn: queryFn(reqOptions)<Structure>, refetchOnWindowFocus: false });

useUserDataQuery.queryKey = queryKey;
useUserDataQuery.queryFn = queryFn;
