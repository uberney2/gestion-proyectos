import NextPage from '../buttons/next-page/next-page';
import PaginationNumber from '../buttons/pagination-number/pagination-number';
import PreviousPage from '../buttons/previous-page/previous-page';
import { PageChangeParameters } from '../ipage-change-params';
import { getPagesNumbersArray } from '../utils';
import { EllipsisPagination } from './ellipsis-pagination/ellipsis-pagination';
import { StyledPaginationButtons } from './pagination-buttons.styles';

interface PaginationButtonsProps {
  postsPerPage: number;
  totalPosts: number;
  currentPage: number;
  pagesLimit?: number;
  ellipsisRange?: number;
  showSelectedOnLeftUntil?: number;

  onPageChange: ({ currentPage }: PageChangeParameters) => void;
}

export function PaginationButtons({
  totalPosts,
  currentPage,
  postsPerPage,
  onPageChange,
  ellipsisRange = 3,
  showSelectedOnLeftUntil,
  pagesLimit = 6,
}: PaginationButtonsProps) {
  const amountOfPages = Math.ceil(totalPosts / postsPerPage);
  const pageNumbers: number[] = getPagesNumbersArray(amountOfPages);

  if (ellipsisRange <= 1 || ellipsisRange > Math.floor(amountOfPages / 2 - 1)) {
    ellipsisRange = Math.floor(amountOfPages / 2);
  }

  if (
    !showSelectedOnLeftUntil ||
    showSelectedOnLeftUntil <= ellipsisRange ||
    showSelectedOnLeftUntil >= amountOfPages - 3
  )
    showSelectedOnLeftUntil = amountOfPages / 2;

  const changePage = (currentPage: number) => {
    onPageChange({ currentPage });
  };

  return (
    <StyledPaginationButtons>
      <PreviousPage currentValue={currentPage} onClick={changePage} />
      {amountOfPages <= pagesLimit ? (
        pageNumbers.map((page) => {
          return (
            <PaginationNumber
              key={page}
              page={page}
              selected={page === currentPage}
              onClick={changePage}
            />
          );
        })
      ) : (
        <EllipsisPagination
          amountOfPages={amountOfPages}
          pageNumbers={pageNumbers}
          currentPage={currentPage}
          handlePageChange={changePage}
          ellipsisRange={ellipsisRange}
          showSelectedOnLeftUntil={showSelectedOnLeftUntil}
        />
      )}
      <NextPage
        onClick={changePage}
        currentValue={currentPage}
        valueLimit={amountOfPages}
      />
    </StyledPaginationButtons>
  );
}

export default PaginationButtons;
