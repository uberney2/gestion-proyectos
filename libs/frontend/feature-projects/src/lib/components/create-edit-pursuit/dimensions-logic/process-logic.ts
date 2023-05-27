import { Process, ProcessPloc, ProcessState } from '@delia/frontend/core';
import { v4 as uuid } from 'uuid';

const createProcess = (
  processPloc: ProcessPloc,
  projectId: string,
  process: Process
) => {
  const processId = uuid();
  const processCreate = {
    ...process,
    id: processId,
  };

  processPloc.create(projectId, processCreate);
};

const updateProcess = (
  processPloc: ProcessPloc,
  projectId: string,
  process: Process,
  lastProcess: Process
) => {
  const { id } = lastProcess;
  const processUpdate = {
    ...process,
    id,
  };

  processPloc.update(projectId, id, processUpdate, lastProcess);
};

export const getProcessFromState = (
  processState: ProcessState
): Process | undefined => {
  let process;

  if (
    processState.kind === 'CreatedProcessState' ||
    processState.kind === 'UpdatedProcessState'
  )
    process = processState.process;
  else if (processState.kind === 'ErrorUpdateProcessState')
    process = processState.lastProcess;

  return process;
};

export const createEditProcessForm = (
  projectId: string,
  processState: ProcessState,
  processPloc: ProcessPloc,
  data: any
) => {
  const { accountabilityLevel, status, ...rest } = data;
  const process = {
    accountabilityLevel: accountabilityLevel?.label,
    status: status?.label,
    ...rest,
  };

  const stateProcess = getProcessFromState(processState);

  stateProcess
    ? updateProcess(processPloc, projectId, process, stateProcess)
    : createProcess(processPloc, projectId, process);
};
