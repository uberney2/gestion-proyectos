import SvgKeyboardArrowDown from '../../icon-svg/KeyboardArrowDown';
import { StyledSortableDataTableHeader } from './sortable-data-table-header.styles';

interface SortableDataTableHeaderProps {
  children: React.ReactNode;
  className?: string;
  isSortable?: boolean;
}

export function SortableDataTableHeader({
  children,
  className,
  isSortable = true,
}: SortableDataTableHeaderProps) {
  return (
    <StyledSortableDataTableHeader
      className={`${className} ${isSortable && 'isSortable'}`}
    >
      {isSortable && <SvgKeyboardArrowDown />}
      {children}
    </StyledSortableDataTableHeader>
  );
}
