import { Team, TeamsPloc, TeamsState } from '@delia/frontend/core';
import { v4 as uuid } from 'uuid';

const createTeam = (teamsPloc: TeamsPloc, projectId: string, team: Team) => {
  const id = uuid();
  const teamCreate = {
    ...team,
    id,
  };
  teamsPloc.create(projectId, teamCreate);
};

const updateTeam = (
  teamsPloc: TeamsPloc,
  projectId: string,
  team: Team,
  lastTeam: Team
) => {
  const { id } = lastTeam;
  const teamUpdate = {
    ...team,
    id,
  };
  teamsPloc.update(projectId, id, teamUpdate, lastTeam);
};

export const getTeamFromState = (teamState: TeamsState): Team | undefined => {
  let team;

  if (
    teamState.kind === 'CreatedTeamState' ||
    teamState.kind === 'UpdatedTeamState'
  )
    team = teamState.team;
  else if (teamState.kind === 'ErrorUpdateTeamState') team = teamState.lastTeam;

  return team;
};

export const createEditTeamForm = (
  projectId: string,
  teamsState: TeamsState,
  teamsPloc: TeamsPloc,
  data: any
) => {
  const { compositionRisk, configuration, status, ...rest } = data;
  const teamWithoutId = {
    teamConfiguration: configuration,
    status: status?.label,
    composition: compositionRisk,
    ...rest,
  };

  const stateTeam = getTeamFromState(teamsState);

  stateTeam
    ? updateTeam(teamsPloc, projectId, teamWithoutId, stateTeam)
    : createTeam(teamsPloc, projectId, teamWithoutId);
};
