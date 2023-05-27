import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../theme/theme';
import { PaginationNumber, PaginationNumberProps } from './pagination-number';

describe('Pagination number button ', () => {
  const renderPaginationNumber = ({
    page = 3,
    selected = true,
    onClick = jest.fn(),
  }: Partial<PaginationNumberProps> = {}) => {
    return render(
      <ThemeProvider theme={theme}>
        <PaginationNumber page={page} onClick={onClick} selected={selected} />
      </ThemeProvider>
    );
  };

  it('should render successfully', () => {
    const { container } = renderPaginationNumber();
    expect(container).toBeDefined();
  });
  it('should apply variant: selected when selected is true', () => {
    const { container } = renderPaginationNumber({});
    expect(container.firstElementChild).toHaveClass('selected');
  });
  it('should apply variant: nonselected when selected is false', () => {
    const { container } = renderPaginationNumber({ selected: false });
    expect(container.firstElementChild).not.toHaveClass('hidden');
  });
  it('should triggers onClick if page is nonselected', () => {
    const onClick = jest.fn();
    const { getByRole } = renderPaginationNumber({ onClick, selected: false });

    getByRole('button').click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should execute no onClick  action if page is selected', () => {
    const onClick = jest.fn();
    const { getByRole } = renderPaginationNumber({ onClick, selected: true });

    getByRole('button').click();
    expect(onClick).not.toHaveBeenCalled();
  });
});
