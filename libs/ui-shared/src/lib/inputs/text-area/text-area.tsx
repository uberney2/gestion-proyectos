import { AreaHTMLAttributes } from 'react';
import { StyledGenericInputError } from '../common/generic-input-error.styles';
import { StyledTextAreaContainer } from './text-area-container.styles';
import { StyledTextArea } from './text-area.styles';

export interface TextAreaProps extends AreaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
}

export const TextArea = ({
  error,
  errorMessage,
  style,
  disabled,
  ...rest
}: TextAreaProps) => {
  const errorClass = error ? 'error' : '';
  const className = `${errorClass}`;
  const height = style?.height;
  const width = style?.width;

  return (
    <StyledTextAreaContainer className={className} style={{ height, width }}>
      <StyledTextArea className={className} disabled={disabled} {...rest} />
      {error && (
        <StyledGenericInputError>{errorMessage}</StyledGenericInputError>
      )}
    </StyledTextAreaContainer>
  );
};

export default TextArea;
