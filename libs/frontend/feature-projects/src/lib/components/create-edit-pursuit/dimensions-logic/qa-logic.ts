import { QA, QAPloc, QAState } from '@delia/frontend/core';
import { v4 as uuid } from 'uuid';

const createQA = (qaPloc: QAPloc, projectId: string, qa: QA) => {
  const id = uuid();
  const qaCreate = {
    ...qa,
    id,
  };
  qaPloc.create(projectId, qaCreate);
};

const updateQA = (qaPloc: QAPloc, projectId: string, qa: QA, lastQA: QA) => {
  const { id } = lastQA;
  const qaUpdate = {
    ...qa,
    id,
  };
  qaPloc.update(projectId, id, qaUpdate, lastQA);
};

export const getQAFromState = (qaState: QAState): QA | undefined => {
  let qa;

  if (qaState.kind === 'CreatedQAState' || qaState.kind === 'UpdatedQAState')
    qa = qaState.qa;
  else if (qaState.kind === 'ErrorUpdateQAState') qa = qaState.lastQA;

  return qa;
};

export const createEditQAForm = (
  projectId: string,
  qaState: QAState,
  qaPloc: QAPloc,
  data: any
) => {
  const { status, automatedProcess, manualProcess, ...rest } = data;

  const qa = {
    status: status?.label,
    automatedProcess: automatedProcess ? true : false,
    manualProcess: manualProcess ? true : false,
    ...rest,
  };

  const stateQA = getQAFromState(qaState);

  stateQA
    ? updateQA(qaPloc, projectId, qa, stateQA)
    : createQA(qaPloc, projectId, qa);
};
