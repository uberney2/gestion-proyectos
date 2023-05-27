import { InputHTMLAttributes } from 'react';
import { StyledGenericInputError } from '../common/generic-input-error.styles';
import {
  StyledGenericInput,
  StyledGenericInputContainer,
  StyledInputIconContainer,
} from './generic-input.styles';
import { InputIcon } from './input-icon/input-icon';

export interface GenericInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
  icon?: React.ReactNode;
  large?: 'sm' | 'lg' | 'md';
}

export const GenericInput = ({
  error,
  disabled,
  errorMessage,
  children,
  style,
  icon,
  width,
  height,
  large,
  ...rest
}: GenericInputProps) => {
  const errorClass = error ? 'error' : '';
  const className = `${errorClass} ${large}`;

  return (
    <StyledGenericInputContainer
      className={className}
      style={{ ...style, height, width }}
    >
      <StyledInputIconContainer>
        <StyledGenericInput
          autoComplete="off"
          className={className}
          disabled={disabled}
          width={width}
          height={height}
          {...rest}
        />
        {icon && <InputIcon icon={icon} className={className} />}
      </StyledInputIconContainer>
      {error && (
        <StyledGenericInputError>{errorMessage}</StyledGenericInputError>
      )}
    </StyledGenericInputContainer>
  );
};

export default GenericInput;
