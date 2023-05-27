/* eslint-disable jsx-a11y/aria-role */
import { StyledInputIcon } from './input-icon.styles';

interface InputIconProps {
  className?: string;
  icon: React.ReactNode;
}
export const InputIcon = ({ icon, className }: InputIconProps) => {
  return (
    <StyledInputIcon role="graphics-document" className={className}>
      {icon}
    </StyledInputIcon>
  );
};
