import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import Button, { ButtonProps } from './button';

describe('Button', () => {
  const renderButton = ({
    text = '',
    disabled = undefined,
    variant = undefined,
    onClick = jest.fn(),
  }: Partial<ButtonProps> = {}) =>
    render(
      <ThemeProvider theme={theme}>
        <Button
          text={text}
          disabled={disabled}
          variant={variant}
          onClick={onClick}
        />
      </ThemeProvider>
    );

  it('should render successfully', () => {
    const { container } = renderButton({ text: 'Button' });
    expect(container).toHaveTextContent('Button');
  });
  it('should apply variant', () => {
    const { container } = renderButton({ variant: 'primary' });
    expect(container.firstElementChild).toHaveClass('primary');
  });
  it('should apply disabled', () => {
    const { getByRole } = renderButton({ disabled: true });

    const button = getByRole('button');
    expect(button).toBeDisabled();
  });
  it('should triggers onClick', () => {
    const onClick = jest.fn();
    const { getByRole } = renderButton({ onClick });

    getByRole('button').click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it('should not triggered click when disabled', () => {
    const onClick = jest.fn();
    const { getByRole } = renderButton({ onClick, disabled: true });

    const button = getByRole('button');
    expect(button).toBeDisabled();

    button.click();
    expect(onClick).not.toHaveBeenCalled();
  });
});
