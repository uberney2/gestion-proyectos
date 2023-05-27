import { ToastContainerProps } from 'react-toastify';
import CloseIcon from '../icon-svg/CloseIcon';
import { StyledToastContainer } from './toast.styles';
export const Toast = ({ hideProgressBar }: ToastContainerProps) => {
  return (
    <StyledToastContainer
      hideProgressBar={hideProgressBar || true}
      closeButton={({ type }) => (
        <CloseIcon
          style={{
            stroke: 'none',
            paddingTop: '5px',
            maxHeight: '40px',
            maxWidth: '40px',
            minWidth: '40px',
          }}
        />
      )}
    />
  );
};
