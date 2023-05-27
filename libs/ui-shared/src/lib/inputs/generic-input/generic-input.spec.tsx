import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ChevronLeftIcon } from '../../icon-svg';
import { theme } from '../../theme/theme';
import GenericInput, { GenericInputProps } from './generic-input';
import { InputIcon } from './input-icon/input-icon';

describe('Generic Input', () => {
  const renderInput = ({
    error = false,
    ...rest
  }: Partial<GenericInputProps> = {}) =>
    render(
      <ThemeProvider theme={theme}>
        <GenericInput error={error} {...rest} />
      </ThemeProvider>
    );

  it('Should render successfully', () => {
    const text = 'This is a default value';
    const { getByRole } = renderInput({
      defaultValue: text,
    });
    expect(getByRole('textbox')).toBeDefined();
  });

  it('Should be disabled when disabled property is true', () => {
    const { getByRole } = renderInput({
      disabled: true,
    });
    expect(getByRole('textbox')).toBeDisabled();
  });
  it('Should show an error message when error is true', () => {
    const message = 'Mensaje de error';
    const { getByText } = renderInput({
      errorMessage: message,
      error: true,
    });
    expect(getByText(message));
  });
  it('Should have an input-icon children if children property is defined on render', () => {
    const { getAllByRole } = renderInput({
      icon: <InputIcon icon={<ChevronLeftIcon />} />,
    });
    expect(getAllByRole('graphics-document')).toBeDefined();
  });
});
