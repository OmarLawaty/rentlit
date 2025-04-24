import type { PaginationMetadata } from '@/api/types';

import { PaginationButton } from './PaginationButton';

interface PaginationPagesButtonsProps extends PaginationMetadata {
  onPageChange: (page: number) => void;
}

export const PaginationPagesButtons = ({ currentPage, pagesCount, onPageChange }: PaginationPagesButtonsProps) => {
  if (pagesCount > 5)
    return <ShortenedPaginationButtons currentPage={currentPage} pagesCount={pagesCount} onPageChange={onPageChange} />;

  return Array.from({ length: pagesCount }, (_, i) => (
    <PaginationButton key={i} isActive={currentPage === i + 1} onClick={() => onPageChange(i + 1)}>
      {i + 1}
    </PaginationButton>
  ));
};

const ShortenedPaginationButtons = ({
  currentPage,
  pagesCount,
  onPageChange,
}: Omit<PaginationPagesButtonsProps, 'total'>) => (
  <>
    {currentPage > 2 && (
      <>
        <PaginationButton onClick={() => onPageChange(1)} isActive={currentPage === 1}>
          1
        </PaginationButton>

        {currentPage - 2 !== 1 && <DotsButton />}
      </>
    )}

    {currentPage > 1 && (
      <PaginationButton onClick={() => onPageChange(currentPage - 1)} isActive={currentPage === currentPage - 1}>
        {currentPage - 1}
      </PaginationButton>
    )}

    <PaginationButton onClick={() => onPageChange(currentPage)} isActive={currentPage === currentPage}>
      {currentPage}
    </PaginationButton>

    {currentPage < pagesCount && (
      <PaginationButton onClick={() => onPageChange(currentPage + 1)} isActive={currentPage === currentPage + 1}>
        {currentPage + 1}
      </PaginationButton>
    )}

    {currentPage + 1 < pagesCount && (
      <>
        {currentPage + 2 !== pagesCount && <DotsButton />}

        <PaginationButton onClick={() => onPageChange(pagesCount)} isActive={currentPage === pagesCount}>
          {pagesCount}
        </PaginationButton>
      </>
    )}
  </>
);

const DotsButton = () => (
  <PaginationButton cursor='default' disabled>
    ...
  </PaginationButton>
);
