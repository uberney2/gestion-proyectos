import React from 'react';
import { StyledBreadcrumbComponent } from './breadcrumb-component.styles';
import { insertSeparators } from './breadcrumb-render-logic';

export interface BreadcrumbComponentProps {
  children: React.ReactNode[];
  separator?: React.ReactNode | string;
}

export const Breadcrumb = ({
  children,
  separator = '/',
}: BreadcrumbComponentProps) => {
  return (
    <StyledBreadcrumbComponent>
      {children && separator && insertSeparators(children, separator)}
    </StyledBreadcrumbComponent>
  );
};
