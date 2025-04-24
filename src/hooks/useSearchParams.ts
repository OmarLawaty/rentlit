'use client';

import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { usePathname, useSearchParams as useSearchParamsNext } from 'next/navigation';
import { useRouter } from 'nextjs-toploader/app';
import { useCallback } from 'react';

export const useSearchParam = () => {
  const searchParams = useSearchParamsNext();
  const pathname = usePathname();
  const router = useRouter();

  const set = useCallback(
    (
      key: string,
      value: string | number | boolean | undefined | null,
      method: keyof Omit<AppRouterInstance, 'prefetch'> = 'replace'
    ) => {
      const params = new URLSearchParams(Array.from(searchParams.entries()));

      if (value === undefined || value === null || value === '') params.delete(key);
      else params.set(key, value.toString());

      const newQuery = params.toString() ? `?${params.toString()}` : '';
      router[method](`${pathname}${newQuery}`, { scroll: false });
    },
    [searchParams, pathname, router]
  );

  const get = (key: string) => searchParams.get(key);

  return { get, set };
};
