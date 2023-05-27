import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../theme/theme';
import { PreviousPageProps, PreviousPage } from './previous-page';

describe('Previous page button ', () => {
  const renderPreviousPage = ({
    currentValue = 3,
    onClick = jest.fn(),
  }: Partial<PreviousPageProps> = {}) => {
    return render(
      <ThemeProvider theme={theme}>
        <PreviousPage currentValue={currentValue} onClick={onClick} />
      </ThemeProvider>
    );
  };

  it('should render successfully', () => {
    const { container } = renderPreviousPage({ currentValue: 10 });
    expect(container).toBeDefined();
  });
  it('should apply variant: hidden when current value is equal to 1', () => {
    const { container } = renderPreviousPage({ currentValue: 1 });
    expect(container.firstElementChild).toHaveClass('hidden');
  });
  it('should be visible if current value is upper than 1', () => {
    const { container } = renderPreviousPage({ currentValue: 4 });
    expect(container.firstElementChild).not.toHaveClass('hidden');
  });
  it('should triggers onClick if current page is upper than 1', () => {
    const onClick = jest.fn();
    const { getByRole } = renderPreviousPage({ onClick });

    getByRole('button').click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
