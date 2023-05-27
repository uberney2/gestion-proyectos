import { Team } from '../domain';

export interface CreatedTeamState {
  kind: 'CreatedTeamState';
  team: Team;
}

export interface CreatingTeamState {
  kind: 'CreatingTeamState';
}

export interface ErrorCreateTeamState {
  kind: 'ErrorCreateTeamState';
  error: string;
}

export interface LoadingTeamsState {
  kind: 'LoadingTeamsState';
}

export interface LoadedTeamsState {
  kind: 'LoadedTeamsState';
  teams: Team;
}

export interface LoadedTeamState {
  kind: 'LoadedTeamState';
  team: Team;
}

export interface ErrorLoadTeamsState {
  kind: 'ErrorLoadTeamsState';
  error: string;
}

export interface UpdatingTeamState {
  kind: 'UpdatingTeamState';
}

export interface UpdatedTeamState {
  kind: 'UpdatedTeamState';
  team: Team;
}

export interface ErrorUpdateTeamState {
  kind: 'ErrorUpdateTeamState';
  error: string;
  lastTeam?: Team;
}

export type TeamsState =
  | CreatedTeamState
  | CreatingTeamState
  | LoadedTeamState
  | ErrorCreateTeamState
  | LoadedTeamsState
  | LoadingTeamsState
  | ErrorLoadTeamsState
  | UpdatingTeamState
  | UpdatedTeamState
  | ErrorUpdateTeamState;

export const teamsInitialState: TeamsState = {
  kind: 'CreatingTeamState',
};

export type TeamsErrorsKind =
  | 'ErrorCreateTeamState'
  | 'ErrorLoadTeamsState'
  | 'ErrorUpdateTeamState';
