import { Plan } from '@delia/frontend/core';
import { FieldValues, UseFormReset } from 'react-hook-form';

export const setFormPlan = (reset: UseFormReset<FieldValues>, plan: Plan) => {
  const { status, ...planRest } = plan;
  reset({
    status: status && {
      label: status,
      value: status,
    },
    ...planRest,
  });
};
