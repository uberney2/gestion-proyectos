import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';
import { TextArea, TextAreaProps } from './text-area';
describe('Text Area', () => {
  const renderTextArea = ({
    onClick = jest.fn(),
    error = false,
    ...rest
  }: Partial<TextAreaProps> = {}) =>
    render(
      <ThemeProvider theme={theme}>
        <TextArea error={error} {...rest} />
      </ThemeProvider>
    );

  it('Should render successfully', () => {
    const { getByRole } = renderTextArea({
      defaultValue: 'This is a default value',
    });
    expect(getByRole('textbox')).toBeDefined();
  });
  it('Should be disabled when disabled property is true', () => {
    const { getByRole } = renderTextArea({
      disabled: true,
    });
    expect(getByRole('textbox')).toBeDisabled();
  });
  it('Should show an error message when error is true', () => {
    const message = 'Mensaje de error';
    const { getByText } = renderTextArea({
      errorMessage: message,
      error: true,
    });
    expect(getByText(message));
  });
});
