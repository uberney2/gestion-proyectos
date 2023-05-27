import { Gut } from '../domain';

export interface CreatedGutState {
  kind: 'CreatedGutState';
  gut: Gut;
}

export interface CreatingGutState {
  kind: 'CreatingGutState';
}

export interface ErrorCreateGutState {
  kind: 'ErrorCreateGutState';
  error: string;
}

export interface LoadingGutState {
  kind: 'LoadingGutState';
}

export interface LoadedGutState {
  kind: 'LoadedGutState';
  gut: Gut;
}

export interface ErrorLoadGutState {
  kind: 'ErrorLoadGutState';
  error: string;
}

export interface UpdatingGutState {
  kind: 'UpdatingGutState';
}

export interface UpdatedGutState {
  kind: 'UpdatedGutState';
  gut: Gut;
}

export interface ErrorUpdateGutState {
  kind: 'ErrorUpdateGutState';
  error: string;
  lastGut?: Gut;
}

export type GutState =
  | CreatedGutState
  | CreatingGutState
  | ErrorCreateGutState
  | LoadedGutState
  | LoadingGutState
  | ErrorLoadGutState
  | UpdatingGutState
  | UpdatedGutState
  | ErrorUpdateGutState;

export const gutInitialState: GutState = {
  kind: 'CreatingGutState',
};

export type GutErrorsKind =
  | 'ErrorCreateGutState'
  | 'ErrorLoadGutState'
  | 'ErrorUpdateGutState';
