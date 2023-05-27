import { Process } from '@delia/frontend/core';
import { FieldValues, UseFormReset } from 'react-hook-form';

export const setFormProcess = (
  reset: UseFormReset<FieldValues>,
  process: Process
) => {
  const { status, accountabilityLevel, ...processRest } = process;
  reset({
    status: status && {
      label: status,
      value: status,
    },
    accountabilityLevel: accountabilityLevel && {
      label: accountabilityLevel,
      value: accountabilityLevel,
    },
    ...processRest,
  });
};
