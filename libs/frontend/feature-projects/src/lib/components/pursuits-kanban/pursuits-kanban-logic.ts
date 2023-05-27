import { Project, ProjectsPloc, PursuitsStatus } from '@delia/frontend/core';

export interface ProjectKanban extends Project {
  hidden?: boolean;
}

export interface adapterTypes {
  open: string;
  preanalysis: string;
  engineeringReview: string;
  inValidation: string;
  cancelled: string;
}
export interface StatusPursuitsType {
  open: PursuitsStatus.OPEN;
  preanalysis: PursuitsStatus.PRE_ANALYSIS;
  engineeringReview: PursuitsStatus.ENGINEERING_REVIEW;
  inValidation: PursuitsStatus.IN_VALIDATION;
  cancelled: PursuitsStatus.CANCELLED;
}

export interface KanbanFilters {
  buOwner?: { id?: string; name?: string };
  portfolio?: { id?: string; name?: string };
  name?: string;
}

const findProjectById = (id: string, projects: Project[]) => {
  const foundProject = projects.find((project) => project.id === id);
  return foundProject;
};

export function updatePursuit(
  id: string,
  dropStatus: string,
  projectsPloc: ProjectsPloc,
  projects: Project[]
) {
  const projectFound = findProjectById(id, projects);

  const getPursuitStatus = {
    open: PursuitsStatus.OPEN,
    preanalysis: PursuitsStatus.PRE_ANALYSIS,
    engineeringReview: PursuitsStatus.ENGINEERING_REVIEW,
    inValidation: PursuitsStatus.IN_VALIDATION,
    cancelled: PursuitsStatus.CANCELLED,
  };

  const adapterTypes = {
    open: 'Open',
    preanalysis: 'Preanalysis',
    engineeringReview: 'Engineering Review',
    inValidation: 'In Validation',
    cancelled: 'Cancelled',
  };
  const typedStatus = dropStatus as keyof StatusPursuitsType;
  if (!projectFound || adapterTypes[typedStatus] === projectFound.status)
    return;
  projectFound.statusChangeDate = new Date();
  projectFound.status = getPursuitStatus[typedStatus];
  projectsPloc.update(projectFound.id, projectFound);
}

export function filterPursuits(filters: KanbanFilters, pursuits: Project[]) {
  const pursuitsToFilter = structuredClone(pursuits);
  const filteredProjects = pursuitsToFilter.filter((pursuit) => {
    if (filters.buOwner && filters.buOwner.id !== pursuit.account?.buOwner.id)
      return false;
    if (
      filters.portfolio &&
      filters.portfolio.id !== pursuit.account?.portfolio.id
    )
      return false;
    if (
      filters.name &&
      !pursuit.name.toLowerCase().includes(filters.name.toLowerCase())
    )
      return false;
    return true;
  });

  return filteredProjects;
}
