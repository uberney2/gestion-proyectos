import { Account } from '../domain';

export interface LoadingAccountsState {
  kind: 'LoadingAccountsState';
}

export interface LoadedAccountsState {
  kind: 'LoadedAccountsState';
  accounts: Account[];
}

export interface ErrorAccountsState {
  kind: 'ErrorAccountsState';
  error: string;
}

export interface LoadingAccountState {
  kind: 'LoadingAccountState';
}

export interface LoadedAccountState {
  kind: 'LoadedAccountState';
  account: Account;
}

export interface ErrorLoadAccountState {
  kind: 'ErrorAccountState';
  error: string;
}

export interface CreatingAccountState {
  kind: 'CreatingAccountState';
}

export interface CreatedAccountState {
  kind: 'CreatedAccountState';
  account: Account;
}

export interface ErrorCreateAccountState {
  kind: 'ErrorCreateAccountState';
  error: string;
}

export interface UpdatingAccountState {
  kind: 'UpdatingAccountState';
}

export interface ErrorUpdateAccountState {
  kind: 'ErrorUpdateAccountState';
  error: string;
}

export interface UpdatedAccountState {
  kind: 'UpdatedAccountState';
  account: Account;
}

export interface SettedAccountState {
  kind: 'SettedAccountState';
  account: Account;
}

export type AccountsState =
  | LoadingAccountsState
  | LoadedAccountsState
  | ErrorAccountsState
  | LoadedAccountState
  | LoadingAccountState
  | ErrorLoadAccountState
  | CreatingAccountState
  | CreatedAccountState
  | ErrorCreateAccountState
  | UpdatingAccountState
  | ErrorUpdateAccountState
  | UpdatedAccountState
  | SettedAccountState;

export const accountsInitialState: AccountsState = {
  kind: 'LoadingAccountsState',
};

export type accountsErrorsKind =
  | 'ErrorCreateAccountState'
  | 'ErrorAccountState'
  | 'ErrorAccountsState'
  | 'ErrorUpdateAccountState';
