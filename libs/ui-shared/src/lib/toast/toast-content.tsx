import { StyledToastContent } from './toast.styles';

interface ToastContentProps {
  title?: string;
  message: string;
}

export const ToastContent = ({ title, message }: ToastContentProps) => {
  return (
    <StyledToastContent>
      <h3>{title}</h3>
      <p> {message}</p>
    </StyledToastContent>
  );
};
