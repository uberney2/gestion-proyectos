import { BuOwner } from '../domain';

export interface LoadedBuOwnersState {
  kind: 'LoadedBuOwnersState';
  buOwners: BuOwner[];
}

export interface LoadingBuOwnersState {
  kind: 'LoadingBuOwnersState';
}

export interface ErrorBuOwnersState {
  kind: 'ErrorBuOwnersState';
  error: string;
}

export type BuOwnersState =
  | LoadedBuOwnersState
  | LoadingBuOwnersState
  | ErrorBuOwnersState;

export const initialBuOwnersState: BuOwnersState = {
  kind: 'LoadingBuOwnersState',
};
