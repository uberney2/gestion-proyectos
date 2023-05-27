import { Gut, GutPloc, GutState } from '@delia/frontend/core';
import { v4 as uuid } from 'uuid';

const createGut = (gutPloc: GutPloc, projectId: string, gut: Gut) => {
  const id = uuid();
  const gutCreate = { ...gut, id };
  gutPloc.create(projectId, gutCreate);
};

const updateGut = (
  teamsPloc: GutPloc,
  projectId: string,
  gut: Gut,
  lastGut: Gut
) => {
  const { id } = lastGut;
  const gutUpdate = {
    ...gut,
    id,
  };
  teamsPloc.update(projectId, id, gutUpdate, lastGut);
};

export const getGutFromState = (gutState: GutState): Gut | undefined => {
  let gut;

  if (
    gutState.kind === 'CreatedGutState' ||
    gutState.kind === 'UpdatedGutState'
  )
    gut = gutState.gut;
  else if (gutState.kind === 'ErrorUpdateGutState') gut = gutState.lastGut;

  return gut;
};

export const createEditGutForm = (
  projectId: string,
  gutState: GutState,
  gutPloc: GutPloc,
  data: any
) => {
  const { status, ...rest } = data;

  const gut = {
    status: status?.label,
    ...rest,
  };

  const stateGut = getGutFromState(gutState);
  stateGut
    ? updateGut(gutPloc, projectId, gut, stateGut)
    : createGut(gutPloc, projectId, gut);
};
