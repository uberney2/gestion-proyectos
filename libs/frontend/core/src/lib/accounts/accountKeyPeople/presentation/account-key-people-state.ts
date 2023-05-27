import { AccountKeyPeople } from '../domain/account-key-people';

export interface LoadedAccountKeyPeopleState {
  kind: 'LoadedAccountKeyPeopleState';
  accountKeyPeople: AccountKeyPeople;
}

export interface ErrorAccountKeyPeopleState {
  kind: 'ErrorAccountKeyPeopleState';
  error: string;
}

export interface LoadingAccountKeyPeopleState {
  kind: 'LoadingAccountKeyPeopleState';
}

export interface BindingAccountKeyPeopleState {
  kind: 'BindingAccountKeyPeopleState';
}

export interface BindedAccountKeyPeopleState {
  kind: 'BindedAccountKeyPeopleState';
}

export interface ErrorBindAccountKeyPeopleState {
  kind: 'ErrorBindAccountKeyPeopleState';
  error: string;
}

export interface UpdatingAccountKeyPeopleState {
  kind: 'UpdatingAccountKeyPeopleState';
}

export interface UpdatedAccountKeyPeopleState {
  kind: 'UpdatedAccountKeyPeopleState';
}

export interface ErrorUpdateAccountKeyPeopleState {
  kind: 'ErrorUpdateAccountKeyPeopleState';
  error: string;
}
export interface UnbindedAccountKeyPeopleState {
  kind: 'UnbindedAccountKeyPeopleState';
}

export interface UnbindingAccountKeyPeopleState {
  kind: 'UnbindingAccountKeyPeopleState';
}

export interface ErrorUnbindAccountKeyPeopleState {
  kind: 'ErrorUnbindAccountKeyPeopleState';
  error: string;
}

export type AccountKeyPeopleState =
  | LoadedAccountKeyPeopleState
  | ErrorAccountKeyPeopleState
  | LoadingAccountKeyPeopleState
  | BindedAccountKeyPeopleState
  | BindingAccountKeyPeopleState
  | ErrorBindAccountKeyPeopleState
  | UpdatedAccountKeyPeopleState
  | UpdatingAccountKeyPeopleState
  | ErrorUpdateAccountKeyPeopleState
  | UnbindedAccountKeyPeopleState
  | UnbindingAccountKeyPeopleState
  | ErrorUnbindAccountKeyPeopleState;

export const accountKeyPeopleInitialState: AccountKeyPeopleState = {
  kind: 'LoadingAccountKeyPeopleState',
};

export type accountKeyPeopleErrorsKind =
  | 'ErrorAccountKeyPeopleState'
  | 'ErrorBindAccountKeyPeopleState'
  | 'ErrorUpdateAccountKeyPeopleState'
  | 'ErrorUnbindAccountKeyPeopleState';
