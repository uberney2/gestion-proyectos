/* eslint-disable @typescript-eslint/no-non-null-assertion */
import TooltipComponent from '../tooltip/tooltip';
import { StyledStatusLabel } from './status-label.styles';
/* eslint-disable-next-line */
export interface StatusLabelProps {
  id?: string;
  text: string;
  content?: string;
  status: 'Good' | 'Warning' | 'Bad' | 'Not Defined';
  hasTooltip?: boolean;
}

export function StatusLabel({
  id,
  text,
  content,
  status = 'Not Defined',
  hasTooltip = true,
}: StatusLabelProps) {
  return (
    <StyledStatusLabel id={id} className={`${status}`}>
      {text}
      {hasTooltip && (
        <TooltipComponent
          content={content!}
          anchorSelect={`#${id!}`}
          place="top"
        />
      )}
    </StyledStatusLabel>
  );
}

export default StatusLabel;
