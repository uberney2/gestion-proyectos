import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import { TooltipComponent, TooltipProps } from './tooltip';

describe('Tooltip', () => {
  const renderModal = ({
    anchorSelect = '',
    place = 'top',
    content = '',
  }: Partial<TooltipProps> = {}) =>
    render(
      <ThemeProvider theme={theme}>
        <TooltipComponent
          anchorSelect={anchorSelect}
          place={place}
          content={content}
        />
      </ThemeProvider>
    );

  it('should render successfully', () => {
    const { container } = renderModal();
    expect(container).toBeTruthy();
  });
});
