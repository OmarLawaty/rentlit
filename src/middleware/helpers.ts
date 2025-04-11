import { QueryClient } from '@tanstack/react-query';

import { useCheckTokenQuery } from '@/hooks';

export const checkTokenValidity = async (token: string) => {
  const queryClient = new QueryClient();

  return await queryClient.fetchQuery({
    queryKey: useCheckTokenQuery.queryKey(token),
    queryFn: useCheckTokenQuery.queryFn,
  });
};
