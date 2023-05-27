import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import { Dropdown, DropdownProps } from './dropdown';

describe('Dropdown', () => {
  const renderDropdown = ({
    placeholder = 'DROP DOWN',
    options = [{ label: 'Option 1', value: 'Option 1' }],
    isDisabled = false,
    onChange = jest.fn(),
  }: Partial<DropdownProps<unknown>> = {}) =>
    render(
      <ThemeProvider theme={theme}>
        <Dropdown
          placeholder={placeholder}
          options={options}
          isDisabled={isDisabled}
          onChange={onChange}
        />
      </ThemeProvider>
    );

  it('should render successfully', () => {
    const { container } = renderDropdown({});
    expect(container).toBeTruthy();
  });
});
