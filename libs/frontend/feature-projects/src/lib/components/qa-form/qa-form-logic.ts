import { QA } from '@delia/frontend/core';
import { FieldValues, UseFormReset } from 'react-hook-form';

export const setFormQA = (reset: UseFormReset<FieldValues>, qa: QA) => {
  const { status, ...qaRest } = qa;

  reset({
    status: status && {
      label: status,
      value: status,
    },
    ...qaRest,
  });
};
