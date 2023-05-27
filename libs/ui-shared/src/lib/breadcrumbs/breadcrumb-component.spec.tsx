/* eslint-disable react/jsx-no-useless-fragment */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import { Breadcrumb, BreadcrumbComponentProps } from './breadcrumb';

describe('Breadcrumb', () => {
  const renderBreadcrumb = ({
    separator = '/',
  }: Partial<BreadcrumbComponentProps> = {}) =>
    render(
      <ThemeProvider theme={theme}>
        <Breadcrumb separator={separator}>
          <>Account</>
          <>Perf</>
        </Breadcrumb>
      </ThemeProvider>
    );

  it('should render successfully', () => {
    const { container } = renderBreadcrumb();
    expect(container).toHaveTextContent('Account');
  });
  it('should apply separator', () => {
    const { container } = renderBreadcrumb({ separator: '>' });
    expect(container).toHaveTextContent('>');
  });

  it('should apply variant', () => {
    const { getByText } = renderBreadcrumb();
    expect(getByText('Account')).toHaveClass('unselected');
    expect(getByText('Perf')).toHaveClass('selected');
  });
});
