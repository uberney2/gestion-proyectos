import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import { DatePickerComponent } from './date-picker';

describe('DatePicker', () => {
  const renderDatePicker = () =>
    render(
      <ThemeProvider theme={theme}>
        <DatePickerComponent />
      </ThemeProvider>
    );

  it('should render successfully', () => {
    const { container } = renderDatePicker();
    expect(container).toBeTruthy();
  });
});
