import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import { StatusLabel, StatusLabelProps } from './status-label';

describe('StatusLabel', () => {
  const renderStatusLabel = ({
    text = 'label',
    status = 'Not Defined',
  }: Partial<StatusLabelProps> = {}) =>
    render(
      <ThemeProvider theme={theme}>
        <StatusLabel text={text} status={status} />
      </ThemeProvider>
    );

  it('should render successfully', () => {
    const { container } = renderStatusLabel({});
    expect(container).toBeTruthy();
  });
});
