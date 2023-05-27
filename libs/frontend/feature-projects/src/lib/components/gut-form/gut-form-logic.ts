import { Gut } from '@delia/frontend/core';
import { FieldValues, UseFormReset } from 'react-hook-form';

export const setFormGut = (reset: UseFormReset<FieldValues>, gut: Gut) => {
  const { status, ...rest } = gut;

  reset({
    status: status && {
      label: status,
      value: status,
    },
    ...rest,
  });
};
