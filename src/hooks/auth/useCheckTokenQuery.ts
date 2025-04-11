import { useQuery, type QueryFunctionContext } from '@tanstack/react-query';

import { rentlit } from '@/api';

const queryKey = (token: string) => [, token] as const;

type QueryKey = ReturnType<typeof queryKey>;

const queryFn = ({ queryKey: [, params] }: QueryFunctionContext<QueryKey>) =>
  rentlit
    .get<boolean>('/auth/check-token', { headers: { Authorization: `Bearer ${params}` } })
    .then(res => res.data)
    .catch(() => false);

export const useCheckTokenQuery = (token: string) =>
  useQuery({
    queryKey: queryKey(token),
    queryFn,
    initialData: false,
  });

useCheckTokenQuery.queryKey = queryKey;
useCheckTokenQuery.queryFn = queryFn;
