import { StyledButton, StyledIconButton } from './button.styles';
/* eslint-disable-next-line */
export interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'icon';
  icon?: React.ReactNode;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export function Button({
  text,
  disabled,
  variant = 'primary',
  onClick,
  type = 'button',
  icon,
}: ButtonProps) {
  if (type === 'button' || type === 'submit') {
    return (
      <StyledButton
        disabled={disabled}
        className={variant}
        onClick={onClick}
        type={type}
      >
        {text}
      </StyledButton>
    );
  } else {
    return (
      <StyledIconButton
        disabled={disabled}
        className={variant}
        onClick={onClick}
      >
        {icon}
      </StyledIconButton>
    );
  }
}

export default Button;
