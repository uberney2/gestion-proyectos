import { Project } from '../domain';

export interface CreatedProjectState {
  kind: 'CreatedProjectState';
  project: Project;
}

export interface CreatingProjectState {
  kind: 'CreatingProjectState';
}

export interface ErrorCreateProjectState {
  kind: 'ErrorCreateProjectState';
  error: string;
}

export interface LoadingProjectState {
  kind: 'LoadingProjectState';
}

export interface LoadedProjectState {
  kind: 'LoadedProjectState';
  project: Project;
}

export interface ErrorLoadProjectState {
  kind: 'ErrorLoadProjectState';
  error: string;
}

export interface LoadingProjectsState {
  kind: 'LoadingProjectsState';
}

export interface LoadedProjectsState {
  kind: 'LoadedProjectsState';
  projects: Project[];
}

export interface ErrorLoadProjectsState {
  kind: 'ErrorLoadProjectsState';
  error: string;
}

export interface UpdatingProjectState {
  kind: 'UpdatingProjectState';
}

export interface UpdatedProjectState {
  kind: 'UpdatedProjectState';
  project: Project;
}

export interface ErrorUpdateProjectState {
  kind: 'ErrorUpdateProjectState';
  error: string;
}

export type ProjectsState =
  | CreatedProjectState
  | CreatingProjectState
  | ErrorCreateProjectState
  | LoadedProjectState
  | LoadingProjectState
  | ErrorLoadProjectState
  | LoadingProjectsState
  | LoadedProjectsState
  | ErrorLoadProjectsState
  | UpdatingProjectState
  | UpdatedProjectState
  | ErrorUpdateProjectState;

export const projectsInitialState: ProjectsState = {
  kind: 'CreatingProjectState',
};

export type ProjectsErrorsKind =
  | 'ErrorCreateProjectState'
  | 'ErrorLoadProjectState'
  | 'ErrorLoadProjectsState'
  | 'ErrorUpdateProjectState';
