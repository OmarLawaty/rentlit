'use client';

import { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';

import { useSearchParam } from '@/hooks';
import { getPageValue } from '@/utils/helpers';
import type { PaginationMetadata } from '@/api/types';

import { PaginationButton } from './PaginationButton';
import { PaginationPagesButtons } from './PaginationPagesButtons';

export const PaginationFooter = ({ total, pagesCount }: PaginationMetadata) => {
  const searchParams = useSearchParam();
  const page = searchParams.get('page');
  const search = searchParams.get('search');

  const [currentPage, setCurrentPage] = useState(getPage(page, pagesCount));

  const onPageChange = (page: number) => setCurrentPage(getPage(page, pagesCount));

  useEffect(() => {
    searchParams.set('page', currentPage > 1 ? currentPage : null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    const parsedPage = getPage(page, pagesCount);
    if (parsedPage === currentPage) return;

    setCurrentPage(parsedPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  if (total === 0 || pagesCount === 1) return null;

  return (
    <Flex ms='auto' gap='2.5'>
      <PaginationButton onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <CgChevronLeft />
      </PaginationButton>

      <PaginationPagesButtons
        currentPage={currentPage}
        pagesCount={pagesCount}
        total={total}
        onPageChange={onPageChange}
      />

      <PaginationButton onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === pagesCount}>
        <CgChevronRight />
      </PaginationButton>
    </Flex>
  );
};

const getPage = (page: string | number | null, totalPages: number) => {
  const parsedPage = getPageValue(page) ?? 1;
  if (parsedPage < 1) return 1;
  if (parsedPage > totalPages) return totalPages;

  return parsedPage;
};
