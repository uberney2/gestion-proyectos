import { StyledPagination } from './pagination.styles';
import InputPagination from './input-pagination/pagination-input';
import ButtonsPagination from './buttons-pagination/pagination-buttons';
import { useState } from 'react';
import { PageChangeParameters } from './ipage-change-params';

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  style?: React.CSSProperties;
  pagesLimit?: number;
  ellipsisRange?: number;
  showSelectedOnLeftUntil?: number;
  onPageChange: ({ currentPage }: { currentPage: number }) => void;
}

export function Pagination({
  totalPosts,
  postsPerPage,
  onPageChange,
  ellipsisRange,
  showSelectedOnLeftUntil,
  pagesLimit,
  style,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const pageChange = ({ currentPage }: PageChangeParameters) => {
    onPageChange({ currentPage });
    setCurrentPage(currentPage);
  };

  return (
    <StyledPagination style={style}>
      <InputPagination
        totalPosts={totalPosts}
        postsPerPage={postsPerPage}
        onPageChange={pageChange}
        currentPage={currentPage}
      ></InputPagination>
      <ButtonsPagination
        currentPage={currentPage}
        totalPosts={totalPosts}
        postsPerPage={postsPerPage}
        ellipsisRange={ellipsisRange}
        showSelectedOnLeftUntil={showSelectedOnLeftUntil}
        onPageChange={pageChange}
        pagesLimit={pagesLimit}
      />
    </StyledPagination>
  );
}

export default Pagination;
