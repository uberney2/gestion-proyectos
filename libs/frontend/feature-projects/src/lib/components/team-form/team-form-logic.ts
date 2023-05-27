import { Team } from '@delia/frontend/core';
import { FieldValues, UseFormReset } from 'react-hook-form';

export const setFormTeam = (reset: UseFormReset<FieldValues>, team: Team) => {
  const { status, composition, teamConfiguration, ...teamRest } = team;
  reset({
    compositionRisk: composition,
    configuration: teamConfiguration,
    status: status && {
      label: status,
      value: status,
    },
    ...teamRest,
  });
};
