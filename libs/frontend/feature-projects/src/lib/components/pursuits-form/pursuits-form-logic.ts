import { Project } from '@delia/frontend/core';
import { FieldValues, UseFormReset } from 'react-hook-form';

export const getDropdownOptionsFromStringsArray = (data: string[]) => {
  return data.map((option) => {
    return {
      label: option,
      value: option,
    };
  });
};

export const getProjectTypeBasedOnStatus = (
  projectTypeStatusRelation: { Pursuit: string[]; Project: string[] },
  status: string | undefined
) => {
  return Object.keys(projectTypeStatusRelation).find((type) => {
    if (type === 'Project' || type === 'Pursuit')
      return status && projectTypeStatusRelation[type].includes(status);
    return;
  });
};

export const setFormProject = (
  reset: UseFormReset<FieldValues>,
  project: Project,
  projectTypeStatusRelation: { Pursuit: string[]; Project: string[] }
) => {
  const {
    account,
    name,
    status,
    responsibleFromLatam,
    contractType,
    ...projectRest
  } = project;

  const pursuitType = getProjectTypeBasedOnStatus(
    projectTypeStatusRelation,
    status
  );

  reset({
    ...projectRest,
    pursuitName: name,
    responsibleFromLatam: responsibleFromLatam.map((responsible) => {
      return {
        label: responsible,
        value: responsible,
      };
    }),
    status: status && {
      label: status,
      value: status,
    },
    pursuitType: pursuitType && { label: pursuitType, value: pursuitType },
    contractType: pursuitType && { label: contractType, value: contractType },
    account: { label: account?.name, value: account },
    buOwner: account?.buOwner?.name || 'Account without Portfolio',
    portfolio: account?.portfolio?.name || 'Account without Bu Owner',
  });
};
