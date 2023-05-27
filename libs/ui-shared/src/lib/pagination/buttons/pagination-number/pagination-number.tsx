import { StyledPaginationNumber } from './pagination-number.syles';

export interface PaginationNumberProps {
  page: number;
  selected: boolean;
  onClick(page: number): void;
}

export const PaginationNumber = ({
  page,
  selected,
  onClick,
}: PaginationNumberProps) => {
  return (
    <StyledPaginationNumber
      onClick={(_) => {
        if (selected === false) onClick(page);
      }}
      className={selected === true ? 'selected' : 'nonselected'}
    >
      {page}
    </StyledPaginationNumber>
  );
};
export default PaginationNumber;
