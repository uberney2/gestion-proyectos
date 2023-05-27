import { Plan, PlansPloc, PlansState } from '@delia/frontend/core';
import { v4 as uuid } from 'uuid';

const createPlan = (plansPloc: PlansPloc, projectId: string, plan: Plan) => {
  const id = uuid();
  const planCreate = { ...plan, id };
  plansPloc.create(projectId, planCreate);
};

const updatePlan = (
  plansPloc: PlansPloc,
  projectId: string,
  plan: Plan,
  lastPlan: Plan
) => {
  const { id } = plan;
  const planUpdate = { ...plan, id };
  plansPloc.update(projectId, id, planUpdate, lastPlan);
};

export const getPlanFromState = (planState: PlansState): Plan | undefined => {
  let plan;

  if (
    planState.kind === 'CreatedPlanState' ||
    planState.kind === 'UpdatedPlanState'
  )
    plan = planState.plan;
  else if (planState.kind === 'ErrorUpdatePlanState') plan = planState.lastPlan;

  return plan;
};

export const createEditPlanForm = (
  projectId: string,
  plansState: PlansState,
  plansPloc: PlansPloc,
  data: any
) => {
  const { status, ...rest } = data;
  const plan = {
    status: status?.label,
    ...rest,
  };

  const statePlan = getPlanFromState(plansState);
  statePlan
    ? updatePlan(plansPloc, projectId, plan, statePlan)
    : createPlan(plansPloc, projectId, plan);
};
