import { toast } from 'react-toastify';
import DoneIcon from '../icon-svg/DoneIcon';
import ErrorOutlineIcon from '../icon-svg/ErrorOutlineIcon';
import InfoIcon from '../icon-svg/InfoIcon';
import WarningIcon from '../icon-svg/WarningIcon';
import { ToastContent } from './toast-content';
import { StyledToastIcon } from './toast.styles';
export const toastError = (message: string, title = 'Error') => {
  toast.error(<ToastContent message={message} title={title}></ToastContent>, {
    icon: (
      <StyledToastIcon>
        <ErrorOutlineIcon />
      </StyledToastIcon>
    ),
  });
};

export const toastSuccess = (message: string, title = 'Success') => {
  toast.success(<ToastContent message={message} title={title}></ToastContent>, {
    icon: (
      <StyledToastIcon>
        <DoneIcon />
      </StyledToastIcon>
    ),
  });
};

export const toastWarning = (message: string, title = 'Warning') => {
  toast.warning(<ToastContent message={message} title={title}></ToastContent>, {
    icon: (
      <StyledToastIcon>
        <WarningIcon />
      </StyledToastIcon>
    ),
  });
};

export const toastInfo = (message: string, title = 'Info') => {
  toast.info(<ToastContent message={message} title={title}></ToastContent>, {
    icon: (
      <StyledToastIcon>
        <InfoIcon />
      </StyledToastIcon>
    ),
  });
};
