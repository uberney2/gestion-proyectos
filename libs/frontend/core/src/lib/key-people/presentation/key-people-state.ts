import { KeyPeople } from '../domain';

export interface LoadedKeyPeopleState {
  kind: 'LoadedKeyPeopleState';
  keyPeople: KeyPeople[];
}

export interface LoadingKeyPeopleState {
  kind: 'LoadingKeyPeopleState';
}

export interface ErrorKeyPeopleState {
  kind: 'ErrorKeyPeopleState';
  error: string;
}

export interface SettedKeyPeopleState {
  kind: 'SettedKeyPeopleState';
  keyPeople: KeyPeople;
}

export interface CreatingKeyPeopleState {
  kind: 'CreatingKeyPeopleState';
}

export interface CreatedKeyPeopleState {
  kind: 'CreatedKeyPeopleState';
}

export interface ErrorCreatingKeyPeopleState {
  kind: 'ErrorCreatingKeyPeopleState';
}

export type KeyPeopleState =
  | LoadedKeyPeopleState
  | LoadingKeyPeopleState
  | ErrorKeyPeopleState
  | SettedKeyPeopleState
  | CreatingKeyPeopleState
  | CreatedKeyPeopleState
  | ErrorCreatingKeyPeopleState;

export const initialKeyPeopleState: KeyPeopleState = {
  kind: 'LoadingKeyPeopleState',
};

export type KeyPeopleErrorsKind =
  | 'ErrorKeyPeopleState'
  | 'ErrorCreatingKeyPeopleState';
