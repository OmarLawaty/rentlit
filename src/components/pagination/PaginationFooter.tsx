'use client';

import { Flex } from '@chakra-ui/react';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';

import { useSearchParam } from '@/hooks';
import { getPageValue } from '@/utils/helpers';
import type { PaginationMetadata } from '@/api/types';

import { PaginationButton } from './PaginationButton';
import { PaginationPagesButtons } from './PaginationPagesButtons';

export const PaginationFooter = ({ total, pagesCount }: PaginationMetadata) => {
  const searchParams = useSearchParam();
  const page = getPage(searchParams.get('page'), pagesCount);

  const onPageChange = (page: number) => {
    const parsedPage = getPage(page, pagesCount);

    return searchParams.set('page', parsedPage > 1 ? parsedPage : null);
  };

  if (total === 0 || pagesCount === 1) return null;

  return (
    <Flex ms='auto' me={['auto', null, null, '0']} gap={['1', '1.5', '2.5']}>
      <PaginationButton onClick={() => onPageChange(page - 1)} disabled={page === 1}>
        <CgChevronLeft />
      </PaginationButton>

      <PaginationPagesButtons currentPage={page} pagesCount={pagesCount} total={total} onPageChange={onPageChange} />

      <PaginationButton onClick={() => onPageChange(page + 1)} disabled={page === pagesCount}>
        <CgChevronRight />
      </PaginationButton>
    </Flex>
  );
};

const getPage = (page: string | number | null, totalPages: number) => {
  const parsedPage = getPageValue(page) ?? 1;
  if (parsedPage > totalPages) return totalPages;

  return parsedPage;
};
