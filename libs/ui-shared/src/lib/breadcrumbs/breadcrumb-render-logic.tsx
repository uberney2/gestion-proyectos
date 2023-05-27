import {
  StyledBreadcrumbItem,
  StyledSeparator,
} from './breadcrumb-component.styles';

export const insertSeparators = (
  items: React.ReactNode[],
  separator: React.ReactNode | string
): React.ReactNode[] => {
  const itemsWithSeparators: React.ReactNode[] = [];
  items.forEach((item, index) => {
    const className = index === items.length - 1 ? 'selected' : 'unselected';
    itemsWithSeparators.push(
      <StyledBreadcrumbItem className={className}>{item}</StyledBreadcrumbItem>
    );
    if (index < items.length - 1) {
      itemsWithSeparators.push(<StyledSeparator>{separator}</StyledSeparator>);
    }
  });
  return itemsWithSeparators;
};
