import { PaginationNumber } from '../../buttons/pagination-number/pagination-number';
import {
  ellipsisLeftNumbers,
  ellipsisRightNumbers,
} from './ellipsis-pagination-actions';
import { StyledEllipsisPagination } from './ellipsis-pagination.styles';

interface EllipsisPaginationProps {
  amountOfPages: number;
  currentPage: number;
  pageNumbers: number[];

  handlePageChange(number: number): void;

  ellipsisRange: number;
  showSelectedOnLeftUntil: number;
}

export const EllipsisPagination = ({
  currentPage,
  amountOfPages,
  pageNumbers,
  handlePageChange,
  ellipsisRange,
  showSelectedOnLeftUntil,
}: EllipsisPaginationProps) => {
  const numbersOnLeft = ellipsisLeftNumbers(
    currentPage,
    ellipsisRange,
    showSelectedOnLeftUntil,
    pageNumbers
  );

  let numbersOnRight = ellipsisRightNumbers(
    currentPage,
    ellipsisRange,
    showSelectedOnLeftUntil,
    pageNumbers,
    amountOfPages
  );

  numbersOnRight = numbersOnRight.filter((val) => !numbersOnLeft.includes(val));

  return (
    <StyledEllipsisPagination>
      {numbersOnLeft.map((page: number) => {
        return (
          <PaginationNumber
            key={page}
            page={page}
            selected={page === currentPage}
            onClick={handlePageChange}
          />
        );
      })}
      ...
      {numbersOnRight.map((page) => {
        return (
          <PaginationNumber
            key={page}
            page={page}
            selected={page === currentPage}
            onClick={handlePageChange}
          />
        );
      })}
    </StyledEllipsisPagination>
  );
};
