/* eslint-disable react/jsx-no-useless-fragment */
import { Link, useLocation } from 'react-router-dom';
import { StyledBreadcrumbComponent } from '../breadcrumb-component.styles';
import { insertSeparators } from '../breadcrumb-render-logic';
import {
  getCapitalizedString,
  getVisibleCrumbsStrings,
} from './router-breadcrumb-logic';

interface RouterBreadcrumbProps {
  separator?: React.ReactNode | string;
  showFromIndex?: number;
}

export const RouterBreadcrumb = ({
  separator = '/',
  showFromIndex = 0,
}: RouterBreadcrumbProps) => {
  const getBreadcrumbsItems = (crumbs: string[]) => {
    return crumbs.map((crumb, index) => {
      currentLink += `/${crumb}`;
      crumb = getCapitalizedString(crumb);
      if (index !== crumbs.length - 1) {
        return <Link to={currentLink}>{crumb}</Link>;
      }
      return <>{crumb}</>;
    });
  };

  const location = useLocation();
  const crumbsStrings = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '');
  const [visibleCrumbs, notVisibleCrumbs] = getVisibleCrumbsStrings(
    crumbsStrings,
    showFromIndex
  );
  let currentLink = notVisibleCrumbs.toString();
  const crumbsItems = getBreadcrumbsItems(visibleCrumbs);

  return (
    <StyledBreadcrumbComponent>
      {insertSeparators(crumbsItems, separator)}
    </StyledBreadcrumbComponent>
  );
};
