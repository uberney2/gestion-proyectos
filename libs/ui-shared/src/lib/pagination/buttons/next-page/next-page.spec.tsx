import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../theme/theme';
import NextPage, { NextPageProps } from './next-page';

describe('Next page button ', () => {
  const renderNextPage = ({
    currentValue = 1,
    valueLimit = 10,
    onClick = jest.fn(),
  }: Partial<NextPageProps> = {}) => {
    return render(
      <ThemeProvider theme={theme}>
        <NextPage
          valueLimit={valueLimit}
          currentValue={currentValue}
          onClick={onClick}
        />
      </ThemeProvider>
    );
  };

  it('should render successfully', () => {
    const { container } = renderNextPage({ currentValue: 10, valueLimit: 10 });
    expect(container).toBeDefined();
  });
  it('should apply variant: hidden when current value is equal to value limit', () => {
    const { container } = renderNextPage({ currentValue: 10, valueLimit: 10 });
    expect(container.firstElementChild).toHaveClass('hidden');
  });
  it('should be visible if current value is lower than value limit', () => {
    const { container } = renderNextPage({ currentValue: 1, valueLimit: 10 });
    expect(container.firstElementChild).not.toHaveClass('hidden');
  });
  it('should triggers onClick if current page is lower than limit', () => {
    const onClick = jest.fn();
    const { getByRole } = renderNextPage({ onClick });

    getByRole('button').click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
