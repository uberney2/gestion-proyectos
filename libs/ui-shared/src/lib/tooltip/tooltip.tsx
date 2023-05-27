import 'react-tooltip/dist/react-tooltip.css';
import { StyledTooltip } from './tooltip.styles';

export interface TooltipProps {
  content: string;
  anchorSelect: string;
  place: 'top' | 'bottom' | 'left' | 'right';
}

export const TooltipComponent = ({
  anchorSelect,
  content,
  place,
}: TooltipProps) => {
  return (
    <StyledTooltip
      place={place}
      anchorSelect={anchorSelect}
      content={content}
    />
  );
};

export default TooltipComponent;
