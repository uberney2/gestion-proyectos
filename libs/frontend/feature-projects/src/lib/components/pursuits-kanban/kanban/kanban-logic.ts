import { Project } from '@delia/frontend/core';

export interface GroupedPursuitsType {
  open: Project[];
  preanalysis: Project[];
  engineeringReview: Project[];
  inValidation: Project[];
  cancelled: Project[];
}

type itemsType =
  | 'open'
  | 'preanalysis'
  | 'engineeringReview'
  | 'inValidation'
  | 'cancelled';

export function getDatesDifferenceInDays(date1: Date, date2: Date): number {
  const datesDifference = date1.getTime() - date2.getTime();
  return Math.ceil(datesDifference / (1000 * 3600 * 24));
}

export function sortByDate(projects: GroupedPursuitsType) {
  const statusList = Object.keys(projects);

  for (const status of statusList) {
    const typedStatus = status as keyof GroupedPursuitsType;
    const unsortedProjects = projects[typedStatus];
    projects[typedStatus] = unsortedProjects
      .sort((a, b) =>
        a['statusChangeDate']!.toISOString().localeCompare(
          b['statusChangeDate']!.toISOString()
        )
      )
      .reverse();
  }
  return projects;
}

export function groupProjectsByStatus(
  arr: Project[],
  groupedPursuitsInitialState: GroupedPursuitsType
) {
  return arr.reduce<GroupedPursuitsType>(function (result, project) {
    switch (project.status) {
      case 'Open':
        result.open = [...result.open, project];
        break;
      case 'Preanalysis':
        result.preanalysis = [...result.preanalysis, project];
        break;
      case 'Engineering Review':
        result.engineeringReview = [...result.engineeringReview, project];
        break;
      case 'In Validation':
        result.inValidation = [...result.inValidation, project];
        break;
      case 'Cancelled': {
        const rangeDays = getDatesDifferenceInDays(
          new Date(),
          project.statusChangeDate
        );
        if (rangeDays <= 30)
          result['cancelled'] = [...result.cancelled, project];
        break;
      }
    }
    return result;
  }, groupedPursuitsInitialState);
}

export function isOfTypeStatus(
  keyInput: string,
  items: GroupedPursuitsType
): keyInput is itemsType {
  return Object.keys(items).includes(keyInput);
}

export function getProjectAndStatus(
  id: string,
  items: GroupedPursuitsType
): {
  project: Project | undefined;
  status: itemsType | undefined;
} {
  let project;
  const status = Object.keys(items).find((status) => {
    if (isOfTypeStatus(status, items)) {
      project = items[status].find((obj) => {
        return obj.id === id;
      });
      return !!project;
    }
    return;
  });

  if (status && isOfTypeStatus(status, items)) return { status, project };
  return { status: undefined, project };
}
