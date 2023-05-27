import { Process } from '../domain';

export interface CreatedProcessState {
  kind: 'CreatedProcessState';
  process: Process;
}

export interface CreatingProcessState {
  kind: 'CreatingProcessState';
}

export interface ErrorCreateProcessState {
  kind: 'ErrorCreateProcessState';
  error: string;
}

export interface LoadingProcessState {
  kind: 'LoadingProcessState';
}

export interface LoadedProcessState {
  kind: 'LoadedProcessState';
  process: Process;
}

export interface ErrorLoadProcessState {
  kind: 'ErrorLoadProcessState';
  error: string;
}

export interface UpdatingProcessState {
  kind: 'UpdatingProcessState';
}

export interface UpdatedProcessState {
  kind: 'UpdatedProcessState';
  process: Process;
}

export interface ErrorUpdateProcessState {
  kind: 'ErrorUpdateProcessState';
  error: string;
  lastProcess?: Process;
}

export type ProcessState =
  | CreatedProcessState
  | CreatingProcessState
  | ErrorCreateProcessState
  | LoadedProcessState
  | LoadingProcessState
  | ErrorLoadProcessState
  | UpdatingProcessState
  | UpdatedProcessState
  | ErrorUpdateProcessState;

export const processInitialState: ProcessState = {
  kind: 'CreatingProcessState',
};

export type ProcessErrorsKind =
  | 'ErrorCreateProcessState'
  | 'ErrorLoadProcessState'
  | 'ErrorUpdateProcessState';
