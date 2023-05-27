import {
  Account,
  AccountsState,
  Project,
  ProjectsPloc,
  ProjectsState,
} from '@delia/frontend/core';

type FormMode = 'create' | 'edit';

export const getValueFromDropdownOption = (option: {
  label: string;
  value: any;
}): any => {
  return option.value;
};

const createPursuit = (projectsPloc: ProjectsPloc, pursuit: Project) => {
  projectsPloc.create(pursuit);
};

const editPursuit = (
  projectsPloc: ProjectsPloc,
  idProject: string,
  pursuit: Project
) => {
  projectsPloc.update(idProject, pursuit);
};

export const createEditPursuit = (
  pursuitId: string,
  formMode: FormMode,
  projectsPloc: ProjectsPloc,
  data: any
) => {
  const {
    account,
    pursuitName,
    responsibleFromLatam,
    status,
    contractType,
    ...rest
  } = data;
  const responsibleFromLatamString = responsibleFromLatam.map(
    getValueFromDropdownOption
  );
  const pursuit = {
    ...rest,
    id: pursuitId,
    account: {
      id: account?.value.id,
      name: account?.value.name,
      buOwner: account?.value.buOwner,
      portfolio: account?.value.portfolio,
    },
    name: pursuitName,
    responsibleFromLatam: responsibleFromLatamString,
    status: status?.value,
    contractType: contractType?.value,
    statusChangeDate: new Date(),
  };
  formMode === 'create'
    ? createPursuit(projectsPloc, pursuit)
    : editPursuit(projectsPloc, pursuitId, pursuit);
};

export const getPursuitFromState = (
  projectsState: ProjectsState
): Project | undefined => {
  return projectsState.kind === 'CreatedProjectState' ||
    projectsState.kind === 'UpdatedProjectState'
    ? projectsState.project
    : undefined;
};

export const getAccountsFromState = (
  accountsState: AccountsState
): Account[] => {
  return accountsState.kind === 'LoadedAccountsState'
    ? accountsState.accounts
    : [];
};
