import { QA } from '../domain';

export interface CreatedQAState {
  kind: 'CreatedQAState';
  qa: QA;
}

export interface CreatingQAState {
  kind: 'CreatingQAState';
}

export interface ErrorCreateQAState {
  kind: 'ErrorCreateQAState';
  error: string;
}

export interface LoadingQAState {
  kind: 'LoadingQAState';
}

export interface LoadedQAState {
  kind: 'LoadedQAState';
  qa: QA;
}

export interface ErrorLoadQAState {
  kind: 'ErrorLoadQAState';
  error: string;
}

export interface UpdatingQAState {
  kind: 'UpdatingQAState';
}

export interface UpdatedQAState {
  kind: 'UpdatedQAState';
  qa: QA;
}

export interface ErrorUpdateState {
  kind: 'ErrorUpdateQAState';
  error: string;
  lastQA?: QA;
}

export type QAState =
  | CreatedQAState
  | CreatingQAState
  | ErrorCreateQAState
  | LoadedQAState
  | LoadingQAState
  | ErrorLoadQAState
  | UpdatingQAState
  | UpdatedQAState
  | ErrorUpdateState;

export const qaInitialState: QAState = {
  kind: 'CreatingQAState',
};

export type QAErrorsKind =
  | 'ErrorCreateQAState'
  | 'ErrorLoadQAState'
  | 'ErrorUpdateQAState';
