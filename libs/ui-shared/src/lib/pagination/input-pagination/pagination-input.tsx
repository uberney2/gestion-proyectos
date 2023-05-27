import { useEffect, useState } from 'react';
import GenericInput from '../../inputs/generic-input/generic-input';
import { theme } from '../../theme/theme';
import { PageChangeParameters } from '../ipage-change-params';
import { getOnlyNumeric } from './pagination-input-logic';
import { StyledPaginationInput } from './pagination-input.styles';

export interface PaginationInputProps {
  totalPosts: number;
  postsPerPage: number;
  currentPage: number;

  onPageChange: ({ currentPage }: PageChangeParameters) => void;
}

export const PaginationInput = ({
  totalPosts,
  postsPerPage,
  onPageChange,
  currentPage,
}: PaginationInputProps) => {
  const [inputValue, setInputValue] = useState(currentPage?.toString() || '1');

  useEffect(() => {
    setInputValue(currentPage.toString());
  }, [currentPage]);

  const amountOfPages = Math.ceil(totalPosts / postsPerPage);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = getOnlyNumeric(event.target.value);
    if (value > amountOfPages) {
      value = amountOfPages;
    }
    setInputValue(value.toString());
  };

  const handleClick = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && inputValue) {
      const value = parseInt(inputValue);
      onPageChange({ currentPage: value });
    }
  };

  return (
    <StyledPaginationInput>
      Page
      <GenericInput
        onChange={handleInputChange}
        onKeyDown={handleClick}
        defaultValue={currentPage}
        value={inputValue}
        type={'text'}
        height={'30px'}
        width={'30px'}
        large={'sm'}
        style={{
          color: theme.colors.textPagination,
          borderColor: theme.colors.bgSecondary,
        }}
      />
      of
      <p>{` ${amountOfPages}`}</p>
    </StyledPaginationInput>
  );
};

export default PaginationInput;
